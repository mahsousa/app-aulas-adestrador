import React, { useState } from 'react';
import { TextInput, View, TouchableOpacity, Text } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

interface SearchBarProps {
  placeholder?: string;
  onSearch: (query: string) => void;
}

const SearchBar: React.FC<SearchBarProps> = ({ placeholder, onSearch }) => {
  const [query, setQuery] = useState<string>('');

  const handleSearch = () => {
    onSearch(query);
  };

  return (
    <View className="flex-row items-center bg-gray-200 rounded-full p-2">
      <Ionicons name="search" size={20} color="gray" className="mr-2" />
      <TextInput
        className="flex-1 text-base text-gray-700"
        placeholder={placeholder || 'Buscar...'}
        value={query}
        onChangeText={setQuery}
      />
      {query.length > 0 && (
        <TouchableOpacity onPress={() => setQuery('')} className="p-1">
          <Ionicons name="close-circle" size={20} color="gray" />
        </TouchableOpacity>
      )}
      <TouchableOpacity
        onPress={handleSearch}
        className="bg-blue-500 rounded-full px-4 py-2 ml-2"
      >
        <Text className="text-white font-bold">Buscar</Text>
      </TouchableOpacity>
    </View>
  );
};

export default SearchBar;