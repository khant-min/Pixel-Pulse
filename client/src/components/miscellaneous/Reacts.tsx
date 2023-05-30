import styled from "@emotion/styled";
import { Angry, Like, Love, Sad, Star } from "./PostReact";
import { useAppDispatch } from "../../redux/store/store";
import { userReaction } from "../../redux/features/ActiveReactions";
import { Reaction } from "../../types/global.types";

const StyledReacts = styled("div")({
  display: "flex",
});

export default function Reacts() {
  const dispatch = useAppDispatch();

  const handleClick = (reaction: Reaction) => {
    dispatch(userReaction(reaction));
  };

  return (
    <StyledReacts>
      <Like handleClick={handleClick} />
      <Love handleClick={handleClick} />
      <Star handleClick={handleClick} />
      <Sad handleClick={handleClick} />
      <Angry handleClick={handleClick} />
    </StyledReacts>
  );
}
