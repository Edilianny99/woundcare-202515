import { Flex, Slider, SliderMark, SliderTrack, SliderFilledTrack, SliderThumb } from "@chakra-ui/react";

interface PainSliderProps {
  min: number;
  max: number;
  step: number;
  value: number;
  onChange: (value: number) => void;
}

export function PainSlider({ min, max, step, value, onChange }: PainSliderProps) {
    const labelStyles = {
    mt: "2.5",
    ml: "-3",
    fontSize: "md",
    };

return (
    <Flex w="100%" justify="center" align="center">
        <Slider
        aria-label="marked-slider"
        min={min}
        max={max}
        step={step}
        value={value}
        onChange={onChange}
        maxWidth="200px"
        colorScheme="purple"
    >
        <SliderMark value={0.5} {...labelStyles}>
        😄
        </SliderMark>
        <SliderMark value={2.75} {...labelStyles}>
        😅
        </SliderMark>
        <SliderMark value={5.2} {...labelStyles}>
        😐
        </SliderMark>
        <SliderMark value={7.75} {...labelStyles}>
        😟
        </SliderMark>
        <SliderMark value={10} {...labelStyles}>
        💀
        </SliderMark>
        <SliderTrack bg="purple.100">
            <SliderFilledTrack bg="purple.600" />
        </SliderTrack>
        <SliderThumb boxSize={4} bg="purple.600" />
        </Slider>
    </Flex>
    );
}