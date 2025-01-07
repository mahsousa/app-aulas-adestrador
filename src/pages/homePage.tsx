import React, { useState, useEffect } from "react";
import { ScrollView, View } from "react-native";
import Card from "@/components/Card";
import SearchBar from "@/components/Search";

interface CardData {
  id: number;
  title: string;
  description: string;
  imageUrl: string;
}

const HomePage = () => {
  const [cards, setCards] = useState<CardData[]>([]); 
  const [filteredCards, setFilteredCards] = useState<CardData[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      const mockData: CardData[] = Array.from({ length: 9 }, (_, index) => ({
        id: index + 1,
        title: `Card ${index + 1}`,
        description: `Descrição do card ${index + 1}`,
        imageUrl: `https://dummyimage.com/150x150/ccc/000&text=Card+${index + 1}`,
      }));
      setCards(mockData);
      setFilteredCards(mockData);
    };

    fetchData();
  }, []);

  const handleSearch = (query: string) => {
    const lowercasedQuery = query.toLowerCase();
    const filtered = cards.filter((card) =>
      card.title.toLowerCase().includes(lowercasedQuery)
    );
    setFilteredCards(filtered);
  };

  return (
    <ScrollView className="flex-1 pt-10 px-3">
      <SearchBar placeholder="Buscar cards..." onSearch={handleSearch} />
      <View className="flex-wrap flex-row justify-between mt-4">
        {filteredCards.map((card) => (
          <View key={card.id} style={{ width: "48%", marginBottom: 16 }}>
            <Card data={card} />
          </View>
        ))}
      </View>
    </ScrollView>
  );
};

export default HomePage;