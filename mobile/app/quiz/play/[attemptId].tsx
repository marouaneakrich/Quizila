import { View, Text, Button } from "react-native";
import { useLocalSearchParams, useRouter } from "expo-router";
import { useGameStore } from "./../../src/stores/game.store";

export default function PlayQuiz() {
  const { attemptId } = useLocalSearchParams();
  const router = useRouter();
  const { questions, currentIndex, next, answer } =
    useGameStore();

  const question = questions[currentIndex];

  if (!question) {
    return (
      <View>
        <Text>Quiz Finished 🎉</Text>
        <Button
          title="Go to Home"
          onPress={() => router.replace("/")}
        />
      </View>
    );
  }

  return (
    <View>
      <Text>{question.question}</Text>

      {question.options.map((opt, index) => (
        <Button
          key={index}
          title={opt}
          onPress={async () => {
            await answer(
              Number(attemptId),
              question.id,
              index
            );
            next();
          }}
        />
      ))}
    </View>
  );
}
