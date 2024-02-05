import { useContext, createContext, useState, useMemo } from "react";
import { CARD_STATE, getInitialMemory, isMemoryFinished, isPairCards } from "../../lib/memory";
// Memory Game - Exercise

const MemoryContext = createContext()

export const useMemory = () => {
  const context = useContext(MemoryContext)

  if(!context){
    throw new Error(" useMemory must be in MemoryContextProvider ")
  }

  return context
}

export const MemoryContextProvider = ({ children }) => {
  const [cards, setCards] = useState(() => getInitialMemory())
  const [tryCount, setTryCount] = useState(0)

  const isFinish = useMemo(() => isMemoryFinished(cards), [cards])

  const returnedCard = (cardReveal) => {
    console.log((cardReveal));
    
    if(cardReveal.state !== CARD_STATE.HIDE){
      return
    }
    const onReturnCard = cards.filter(x => x.state === CARD_STATE.RETURNED)

    if(onReturnCard.length === 2 || onReturnCard.includes(cardReveal)) {
      return
    }

    setCards((current) => current.map((card) => {
      if(card.id === cardReveal.id){
        card.state = CARD_STATE.RETURNED
      }
      return card
    }))

    console.log({onReturnCard});

    if(onReturnCard.length === 0){
        return
    }
    onReturnCard.push(cardReveal)
    computedCards(onReturnCard)
    
  }
   
  const computedCards = (onReturnCard) => {
    const isPair = isPairCards(onReturnCard[0], onReturnCard[1])
    
    setTimeout(() => {
      setTryCount((count) => count + 1)
      setCards((current) => {
        return current.map((curr) => {
          if(curr.state === CARD_STATE.RETURNED && onReturnCard.includes(curr)){
            curr.state = isPair ? CARD_STATE.FIND : CARD_STATE.HIDE
          }
          return curr
        })
      })
    }, isPair ? 400 : 1000)


  }
  const reset = () => {
    setCards(() => getInitialMemory())
    setTryCount(0)
  }
  

  const values = { cards, tryCount, returnedCard, reset, isFinish }

  return <MemoryContext.Provider value = {values}>{children}</MemoryContext.Provider>;
};
