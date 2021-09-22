import { extendTheme } from "@chakra-ui/react";
const styles = {
  global: {
    "html, body": {
      bg: "#F3F6FA",
      overflowX: "hidden",
    },
  },
};

const colors = {
  brand: {
    900: "#0043A5",
  },
  switchBg: {
    900: "#87878B",
  },
};

const Switch = {
  variants: {
    brand: {
      width: 200,
      track: {
        bg: "#87878B",
        _checked: {
          bg: "#84BD00",
        },
      },
    },
  },
};

const Button = {
  variants: {
    buttonPanel: {
      color: "white",
      justifyContent: "flex-start",
      backgroundColor: "transparent",
      borderTopLeftRadius: "0",
      borderBottomLeftRadius: "0",
      transition: "all .1s",
      _hover: {
        backgroundColor: "#0453C6",
        borderLeftColor: "#96DD43",
        borderLeftWidth: "3px",
      },
    },
  },
};

const fonts = {
  heading: "Pt Sans, sans-serif",
  body: "Pt Sans, sans-serif",
};

export default extendTheme({
  styles,
  colors,
  fonts,
  components: { Button, Switch },
});
