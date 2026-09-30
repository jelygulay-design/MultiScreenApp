import React from "react";
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  ScrollView,
} from "react-native";

import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

const Stack = createNativeStackNavigator();

const recipes = [
  {
    name: "Chicken Adobo",
    category: "Filipino",
    time: "45 minutes",
    ingredients: "Chicken, soy sauce, vinegar, garlic, and pepper",
    instructions:
      "Cook the chicken with garlic, soy sauce, vinegar, and pepper until tender.",
  },
  {
    name: "Pancakes",
    category: "Breakfast",
    time: "20 minutes",
    ingredients: "Flour, milk, egg, sugar, and butter",
    instructions:
      "Mix all the ingredients and cook the batter on a hot pan until golden brown.",
  },
  {
    name: "Spaghetti",
    category: "Pasta",
    time: "30 minutes",
    ingredients: "Pasta, tomato sauce, ground meat, and cheese",
    instructions:
      "Cook the pasta and prepare the sauce. Mix them together and add cheese.",
  },
];

function HomeScreen({ navigation }) {
  return (
    <View style={styles.container}>
      <Text style={styles.icon}>🍳</Text>

      <Text style={styles.title}>My Recipe Book</Text>

      <Text style={styles.subtitle}>
        Discover simple and delicious recipes.
      </Text>

      <TouchableOpacity
        style={styles.mainButton}
        onPress={() => navigation.navigate("Recipes")}
      >
        <Text style={styles.buttonText}>View Recipes</Text>
      </TouchableOpacity>
    </View>
  );
}

function RecipesScreen({ navigation }) {
  return (
    <ScrollView style={styles.container}>
      <Text style={styles.title}>Recipes</Text>

      {recipes.map((recipe, index) => (
        <TouchableOpacity
          key={index}
          style={styles.recipeCard}
          onPress={() =>
            navigation.navigate("Details", {
              name: recipe.name,
              category: recipe.category,
              time: recipe.time,
              ingredients: recipe.ingredients,
              instructions: recipe.instructions,
            })
          }
        >
          <Text style={styles.recipeIcon}>🍽️</Text>

          <View style={styles.recipeInfo}>
            <Text style={styles.recipeName}>{recipe.name}</Text>
            <Text style={styles.category}>{recipe.category}</Text>
            <Text style={styles.time}>⏱ {recipe.time}</Text>
          </View>
        </TouchableOpacity>
      ))}

      <TouchableOpacity
        style={styles.backButton}
        onPress={() => navigation.goBack()}
      >
        <Text style={styles.buttonText}>← Back Home</Text>
      </TouchableOpacity>
    </ScrollView>
  );
}

function DetailsScreen({ route, navigation }) {
  const {
    name,
    category,
    time,
    ingredients,
    instructions,
  } = route.params;

  return (
    <ScrollView style={styles.container}>
      <Text style={styles.bigIcon}>🍴</Text>

      <Text style={styles.title}>{name}</Text>

      <Text style={styles.category}>{category}</Text>

      <View style={styles.infoBox}>
        <Text style={styles.infoTitle}>Cooking Time</Text>
        <Text style={styles.infoText}>⏱ {time}</Text>
      </View>

      <View style={styles.card}>
        <Text style={styles.sectionTitle}>Ingredients</Text>
        <Text style={styles.text}>{ingredients}</Text>
      </View>

      <View style={styles.card}>
        <Text style={styles.sectionTitle}>Instructions</Text>
        <Text style={styles.text}>{instructions}</Text>
      </View>

      <TouchableOpacity
        style={styles.backButton}
        onPress={() => navigation.goBack()}
      >
        <Text style={styles.buttonText}>← Back to Recipes</Text>
      </TouchableOpacity>
    </ScrollView>
  );
}

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Home"
          component={HomeScreen}
        />

        <Stack.Screen
          name="Recipes"
          component={RecipesScreen}
        />

        <Stack.Screen
          name="Details"
          component={DetailsScreen}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#FFF8F0",
    padding: 20,
  },

  icon: {
    fontSize: 70,
    textAlign: "center",
    marginTop: 80,
  },

  bigIcon: {
    fontSize: 70,
    textAlign: "center",
    marginTop: 30,
  },

  title: {
    fontSize: 30,
    fontWeight: "bold",
    textAlign: "center",
    color: "#8B4513",
    marginBottom: 10,
  },

  subtitle: {
    fontSize: 16,
    color: "#777",
    textAlign: "center",
    marginBottom: 30,
  },

  mainButton: {
    backgroundColor: "#8B4513",
    padding: 16,
    borderRadius: 12,
    alignItems: "center",
  },

  buttonText: {
    color: "white",
    fontSize: 16,
    fontWeight: "bold",
  },

  recipeCard: {
    backgroundColor: "white",
    padding: 18,
    borderRadius: 15,
    marginBottom: 15,
    flexDirection: "row",
    alignItems: "center",
  },

  recipeIcon: {
    fontSize: 40,
    marginRight: 15,
  },

  recipeInfo: {
    flex: 1,
  },

  recipeName: {
    fontSize: 20,
    fontWeight: "bold",
    color: "#333",
  },

  category: {
    color: "#8B4513",
    fontSize: 15,
    marginTop: 5,
  },

  time: {
    color: "#777",
    marginTop: 5,
  },

  infoBox: {
    backgroundColor: "#F3E5D0",
    padding: 18,
    borderRadius: 12,
    marginVertical: 15,
    alignItems: "center",
  },

  infoTitle: {
    fontWeight: "bold",
    color: "#8B4513",
  },

  infoText: {
    fontSize: 18,
    marginTop: 5,
  },

  card: {
    backgroundColor: "white",
    padding: 18,
    borderRadius: 12,
    marginBottom: 15,
  },

  sectionTitle: {
    fontSize: 20,
    fontWeight: "bold",
    color: "#8B4513",
    marginBottom: 10,
  },

  text: {
    fontSize: 16,
    color: "#555",
    lineHeight: 24,
  },

  backButton: {
    backgroundColor: "#555",
    padding: 15,
    borderRadius: 10,
    alignItems: "center",
    marginTop: 10,
    marginBottom: 30,
  },
});