import { View, Text, TouchableOpacity, Alert, ScrollView } from 'react-native';
import { FolderIcon } from '../components/icons/FolderIcon';
import { PageIcon } from '../components/icons/PageIcon';
import { useFonts } from 'expo-font';
import { useState } from 'react';
import * as DocumentPicker from 'expo-document-picker';

export function MusicScreen() {
    const [folders, setFolders] = useState([]);
    const [musicFiles, setMusicFiles] = useState([]);
    const [currentFolder, setCurrentFolder] = useState(null);

    const handleCreateFolder = () => {
        Alert.prompt(
            "Create New Folder",
            "Enter folder name:",
            [
                {
                    text: "Cancel",
                    style: "cancel"
                },
                {
                    text: "Create",
                    onPress: (folderName) => {
                        if (folderName && folderName.trim()) {
                            const newFolder = {
                                id: Date.now().toString(),
                                name: folderName.trim(),
                                files: []
                            };
                            setFolders([...folders, newFolder]);
                            Alert.alert("Success", `Folder "${folderName}" created!`);
                        }
                    }
                }
            ],
            "plain-text"
        );
    };

    const handleUploadMusic = async () => {
        try {
            const result = await DocumentPicker.getDocumentAsync({
                type: ['audio/*', 'application/x-mpegURL', 'application/vnd.apple.mpegurl'],
                copyToCacheDirectory: true
            });

            if (result.type === 'success') {
                const newMusicFile = {
                    id: Date.now().toString(),
                    name: result.name,
                    uri: result.uri,
                    size: result.size,
                    mimeType: result.mimeType
                };

                if (currentFolder) {
                    // Add to current folder
                    const updatedFolders = folders.map(folder => {
                        if (folder.id === currentFolder.id) {
                            return {
                                ...folder,
                                files: [...folder.files, newMusicFile]
                            };
                        }
                        return folder;
                    });
                    setFolders(updatedFolders);
                } else {
                    // Add to root level
                    setMusicFiles([...musicFiles, newMusicFile]);
                }

                Alert.alert("Success", `Music file "${result.name}" uploaded!`);
            }
        } catch (error) {
            Alert.alert("Error", "Failed to upload music file.");
            console.error(error);
        }
    };

    const openFolder = (folder) => {
        setCurrentFolder(folder);
    };

    const goBack = () => {
        setCurrentFolder(null);
    };

    return (
        <View className="flex-1">
            {/* Mini navigation bar at the top */}
            <View className="flex-row justify-around items-center bg-gray-200 py-3 px-4 border-b border-gray-300">
                <TouchableOpacity className="items-center" onPress={handleCreateFolder}>
                    <FolderIcon color="#3b82f6" size={24} />
                    <Text className="text-xs mt-1 text-blue-600">New Folder</Text>
                </TouchableOpacity>

                <TouchableOpacity className="items-center" onPress={handleUploadMusic}>
                    <PageIcon color="#3b82f6" size={24} />
                    <Text className="text-xs mt-1 text-blue-600">New Music</Text>
                </TouchableOpacity>
            </View>

            {/* Content area */}
            <ScrollView className="flex-1 p-4">
                {currentFolder ? (
                    <>
                        <View className="flex-row items-center mb-4">
                            <TouchableOpacity onPress={goBack} className="mr-2">
                                <Text className="text-blue-600">← Back</Text>
                            </TouchableOpacity>
                            <Text className="text-lg font-bold">{currentFolder.name}</Text>
                        </View>

                        {currentFolder.files.length > 0 ? (
                            currentFolder.files.map(file => (
                                <View key={file.id} className="bg-white p-3 rounded-lg mb-2 shadow-sm">
                                    <Text className="font-medium">{file.name}</Text>
                                    <Text className="text-xs text-gray-500">
                                        {(file.size / 1024 / 1024).toFixed(2)} MB
                                    </Text>
                                </View>
                            ))
                        ) : (
                            <Text className="text-center text-gray-500 my-4">No music files in this folder</Text>
                        )}
                    </>
                ) : (
                    <>
                        <Text className="text-lg font-bold mb-4">My Music</Text>

                        {folders.length > 0 && (
                            <View className="mb-4">
                                <Text className="text-md font-semibold mb-2">Folders</Text>
                                {folders.map(folder => (
                                    <TouchableOpacity
                                        key={folder.id}
                                        onPress={() => openFolder(folder)}
                                        className="flex-row items-center bg-white p-3 rounded-lg mb-2 shadow-sm"
                                    >
                                        <FolderIcon color="#3b82f6" size={20} />
                                        <Text className="ml-2">{folder.name}</Text>
                                        <Text className="ml-auto text-xs text-gray-500">
                                            {folder.files.length} files
                                        </Text>
                                    </TouchableOpacity>
                                ))}
                            </View>
                        )}

                        {musicFiles.length > 0 && (
                            <View>
                                <Text className="text-md font-semibold mb-2">Music Files</Text>
                                {musicFiles.map(file => (
                                    <View key={file.id} className="bg-white p-3 rounded-lg mb-2 shadow-sm">
                                        <Text className="font-medium">{file.name}</Text>
                                        <Text className="text-xs text-gray-500">
                                            {(file.size / 1024 / 1024).toFixed(2)} MB
                                        </Text>
                                    </View>
                                ))}
                            </View>
                        )}

                        {folders.length === 0 && musicFiles.length === 0 && (
                            <Text className="text-center text-gray-500 my-4">
                                No folders or music files yet. Create a folder or upload music to get started.
                            </Text>
                        )}
                    </>
                )}
            </ScrollView>
        </View>
    );
}