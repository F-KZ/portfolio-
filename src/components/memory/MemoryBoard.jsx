import { Typography } from "../atom/Typography";
import { MemoryCard } from "./MemoryCard";
import { useMemory } from "./MemoryProvider";

export const MemoryBoard = () => {
  // Memory Game - Exercise
  const {cards, returnedCard } = useMemory()

  if (!cards) {
    return (
      <Typography variant="body2">
        An error occurs, there is no board.
      </Typography>
    );
  }

  return (
    <div className="grid grid-cols-6 grid-rows-6 w-max gap-2">
      {cards.map((card) => (
        <MemoryCard key={card.id} card={card} onClick={()=> returnedCard(card)} >{card.emoji}</MemoryCard>
      ))}
    </div>
  );
};
