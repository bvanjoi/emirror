import React, { useEffect, useState } from 'react';
import styled from 'styled-components';

const EMOJI_URL = 'https://unpkg.com/emojilib@3.0.2/dist/emoji-en-US.json';

const HighlighWrapper = styled.div`
  border-radius: 5px;
  padding: 6px 12px;
  position: relative;
  display: flex;
  background-color: rgb(240, 244, 255);
  border: 1px solid rgb(186, 206, 253);
  color: unset;
`;

const IconWrapper = styled.div`
  display: inline-block;
  font-size: 22px;
  margin: 12px 16px;
  cursor: pointer;

  ::selection {
    background-color: transparent;
  }
`;

const HighlightView = () => {
  const [allEmoji, setAllEmoji] = useState(['✨']);
  const [emoji, setEmoji] = useState('✨');

  const getRandomEmoji = () =>
    setEmoji(allEmoji[Math.floor(Math.random() * allEmoji.length)]);

  useEffect(() => {
    const getEmoji = async () => {
      const res: Record<string, string[]> = await (
        await fetch(EMOJI_URL)
      ).json();
      setAllEmoji(Object.keys(res));
    };

    getEmoji();
  }, []);

  return (
    <HighlighWrapper>
      <IconWrapper
        onClick={() => {
          getRandomEmoji();
        }}
      >
        {emoji}
      </IconWrapper>
    </HighlighWrapper>
  );
};

export default HighlightView;
