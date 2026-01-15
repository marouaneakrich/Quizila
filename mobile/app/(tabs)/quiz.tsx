import { View, Text, FlatList, Button } from "react-native";
import { useEffect } from "react";
import { useRouter } from "expo-router";
import { useQuizStore } from "./../src/stores/quiz.store";

export default function QuizScreen() {
  const router = useRouter();
  const { quizzes, fetchQuizzes } = useQuizStore();

  useEffect(() => {
    fetchQuizzes();
  }, []);

  return (
    <FlatList
      data={quizzes}
      keyExtractor={(item) => item.id.toString()}
      renderItem={({ item }) => (
        <View>
          <Text>{item.title}</Text>
          <Text>{item.description}</Text>
          <Button
            title="Start Quiz"
            onPress={async () => {
              const attemptId =
                await useQuizStore
                  .getState()
                  .startQuiz(item.id);

              router.push(`/quiz/play/${attemptId}`);
            }}
          />
        </View>
      )}
    />
  );
}
