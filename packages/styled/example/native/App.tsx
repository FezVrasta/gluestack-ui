// import { StatusBar } from "expo-status-bar";
import { StyleSheet, View, Pressable } from 'react-native';
import { styled } from '@gluestack/ui-styled';
import React from 'react';
import { initConfig } from '@gluestack/config';
import TestComp from './TestComp';

initConfig({
  aliases: {
    bg: {
      property: 'backgroundColor',
      scale: 'colors',
    },
    backgroundColor: {
      property: 'backgroundColor',
      scale: 'colors',
    },
    bgColor: {
      property: 'backgroundColor',
      scale: 'colors',
    },
    color: {
      property: 'color',
      scale: 'colors',
    },
    borderColor: {
      property: 'borderColor',
      scale: 'colors',
    },

    // dimension
    h: {
      property: 'height',
      scale: 'space',
    },
    w: {
      property: 'width',
      scale: 'space',
    },
    height: {
      property: 'height',
      scale: 'space',
    },
    width: {
      property: 'width',
      scale: 'space',
    },

    // padding
    p: {
      property: 'padding',
      scale: 'space',
    },
    px: {
      property: 'paddingHorizontal',
      scale: 'space',
    },
    py: {
      property: 'paddingVertical',
      scale: 'space',
    },
    pt: {
      property: 'paddingTop',
      scale: 'space',
    },
    pb: {
      property: 'paddingBottom',
      scale: 'space',
    },
    pr: {
      property: 'paddingRight',
      scale: 'space',
    },
    pl: {
      property: 'paddingLeft',
      scale: 'space',
    },
    padding: {
      property: 'padding',
      scale: 'space',
    },
    paddingHorizontal: {
      property: 'paddingHorizontal',
      scale: 'space',
    },
    paddingVertical: {
      property: 'paddingVertical',
      scale: 'space',
    },
    paddingTop: {
      property: 'paddingTop',
      scale: 'space',
    },
    paddingBottom: {
      property: 'paddingBottom',
      scale: 'space',
    },
    paddingRight: {
      property: 'paddingRight',
      scale: 'space',
    },
    paddingLeft: {
      property: 'paddingLeft',
      scale: 'space',
    },

    // margin
    m: {
      property: 'margin',
      scale: 'space',
    },
    mx: {
      property: 'marginHorizontal',
      scale: 'space',
    },
    my: {
      property: 'marginVertical',
      scale: 'space',
    },
    mt: {
      property: 'marginTop',
      scale: 'space',
    },
    mb: {
      property: 'marginBottom',
      scale: 'space',
    },
    mr: {
      property: 'marginRight',
      scale: 'space',
    },
    ml: {
      property: 'marginLeft',
      scale: 'space',
    },
    margin: {
      property: 'margin',
      scale: 'space',
    },
    marginHorizontal: {
      property: 'marginHorizontal',
      scale: 'space',
    },
    marginVertical: {
      property: 'marginVertical',
      scale: 'space',
    },
    marginTop: {
      property: 'marginTop',
      scale: 'space',
    },
    marginBottom: {
      property: 'marginBottom',
      scale: 'space',
    },
    marginRight: {
      property: 'marginRight',
      scale: 'space',
    },
    marginLeft: {
      property: 'marginLeft',
      scale: 'space',
    },

    // Borders
    borderWidth: {
      property: 'borderWidth',
      scale: 'borderWidths',
    },

    borderRadius: {
      property: 'borderRadius',
      scale: 'radii',
    },

    rounded: {
      property: 'borderRadius',
      scale: 'radii',
    },

    // Typography
    letterSpacing: {
      property: 'letterSpacing',
      scale: 'letterSpacings',
    },
    lineHeight: {
      property: 'lineHeight',
      scale: 'lineHeights',
    },
    fontWeight: {
      property: 'fontWeight',
      scale: 'fontWeights',
    },
    fontFamily: {
      property: 'fontFamily',
      scale: 'fonts',
    },
    fontSize: {
      property: 'fontSize',
      scale: 'fontSizes',
    },

    //shadow
    // shadow: {
    //   property: 'letterSpacing',
    //   scale: 'shadows',
    // },
  },

  tokens: {
    colors: {
      white: '#FFFFFF',
      black: '#000000',
      lightText: '#FFFFFF',
      darkText: '#000000',
      rose50: '#fff1f2',
      rose100: '#ffe4e6',
      rose200: '#fecdd3',
      rose300: '#fda4af',
      rose400: '#fb7185',
      rose500: '#f43f5e',
      rose600: '#e11d48',
      rose700: '#be123c',
      rose800: '#9f1239',
      rose900: '#881337',
      pink50: '#fdf2f8',
      pink100: '#fce7f3',
      pink200: '#fbcfe8',
      pink300: '#f9a8d4',
      pink400: '#f472b6',
      pink500: '#ec4899',
      pink600: '#db2777',
      pink700: '#be185d',
      pink800: '#9d174d',
      pink900: '#831843',
      fuchsia50: '#fdf4ff',
      fuchsia100: '#fae8ff',
      fuchsia200: '#f5d0fe',
      fuchsia300: '#f0abfc',
      fuchsia400: '#e879f9',
      fuchsia500: '#d946ef',
      fuchsia600: '#c026d3',
      fuchsia700: '#a21caf',
      fuchsia800: '#86198f',
      fuchsia900: '#701a75',
      purple50: '#faf5ff',
      purple100: '#f3e8ff',
      purple200: '#e9d5ff',
      purple300: '#d8b4fe',
      purple400: '#c084fc',
      purple500: '#a855f7',
      purple600: '#9333ea',
      purple700: '#7e22ce',
      purple800: '#6b21a8',
      purple900: '#581c87',
      violet50: '#f5f3ff',
      violet100: '#ede9fe',
      violet200: '#ddd6fe',
      violet300: '#c4b5fd',
      violet400: '#a78bfa',
      violet500: '#8b5cf6',
      violet600: '#7c3aed',
      violet700: '#6d28d9',
      violet800: '#5b21b6',
      violet900: '#4c1d95',
      indigo50: '#eef2ff',
      indigo100: '#e0e7ff',
      indigo200: '#c7d2fe',
      indigo300: '#a5b4fc',
      indigo400: '#818cf8',
      indigo500: '#6366f1',
      indigo600: '#4f46e5',
      indigo700: '#4338ca',
      indigo800: '#3730a3',
      indigo900: '#312e81',
      blue50: '#eff6ff',
      blue100: '#dbeafe',
      blue200: '#bfdbfe',
      blue300: '#93c5fd',
      blue400: '#60a5fa',
      blue500: '#3b82f6',
      blue600: '#2563eb',
      blue700: '#1d4ed8',
      blue800: '#1e40af',
      blue900: '#1e3a8a',
      lightBlue50: '#f0f9ff',
      lightBlue100: '#e0f2fe',
      lightBlue200: '#bae6fd',
      lightBlue300: '#7dd3fc',
      lightBlue400: '#38bdf8',
      lightBlue500: '#0ea5e9',
      lightBlue600: '#0284c7',
      lightBlue700: '#0369a1',
      lightBlue800: '#075985',
      lightBlue900: '#0c4a6e',
      darkBlue50: '#dbf4ff',
      darkBlue100: '#addbff',
      darkBlue200: '#7cc2ff',
      darkBlue300: '#4aa9ff',
      darkBlue400: '#1a91ff',
      darkBlue500: '#0077e6',
      darkBlue600: '#005db4',
      darkBlue700: '#004282',
      darkBlue800: '#002851',
      darkBlue900: '#000e21',
      cyan50: '#ecfeff',
      cyan100: '#cffafe',
      cyan200: '#a5f3fc',
      cyan300: '#67e8f9',
      cyan400: '#22d3ee',
      cyan500: '#06b6d4',
      cyan600: '#0891b2',
      cyan700: '#0e7490',
      cyan800: '#155e75',
      cyan900: '#164e63',
      teal50: '#f0fdfa',
      teal100: '#ccfbf1',
      teal200: '#99f6e4',
      teal300: '#5eead4',
      teal400: '#2dd4bf',
      teal500: '#14b8a6',
      teal600: '#0d9488',
      teal700: '#0f766e',
      teal800: '#115e59',
      teal900: '#134e4a',
      emerald50: '#ecfdf5',
      emerald100: '#d1fae5',
      emerald200: '#a7f3d0',
      emerald300: '#6ee7b7',
      emerald400: '#34d399',
      emerald500: '#10b981',
      emerald600: '#059669',
      emerald700: '#047857',
      emerald800: '#065f46',
      emerald900: '#064e3b',
      green50: '#f0fdf4',
      green100: '#dcfce7',
      green200: '#bbf7d0',
      green300: '#86efac',
      green400: '#4ade80',
      green500: '#22c55e',
      green600: '#16a34a',
      green700: '#15803d',
      green800: '#166534',
      green900: '#14532d',
      lime50: '#f7fee7',
      lime100: '#ecfccb',
      lime200: '#d9f99d',
      lime300: '#bef264',
      lime400: '#a3e635',
      lime500: '#84cc16',
      lime600: '#65a30d',
      lime700: '#4d7c0f',
      lime800: '#3f6212',
      lime900: '#365314',
      yellow50: '#fefce8',
      yellow100: '#fef9c3',
      yellow200: '#fef08a',
      yellow300: '#fde047',
      yellow400: '#facc15',
      yellow500: '#eab308',
      yellow600: '#ca8a04',
      yellow700: '#a16207',
      yellow800: '#854d0e',
      yellow900: '#713f12',
      amber50: '#fffbeb',
      amber100: '#fef3c7',
      amber200: '#fde68a',
      amber300: '#fcd34d',
      amber400: '#fbbf24',
      amber500: '#f59e0b',
      amber600: '#d97706',
      amber700: '#b45309',
      amber800: '#92400e',
      amber900: '#78350f',
      orange50: '#fff7ed',
      orange100: '#ffedd5',
      orange200: '#fed7aa',
      orange300: '#fdba74',
      orange400: '#fb923c',
      orange500: '#f97316',
      orange600: '#ea580c',
      orange700: '#c2410c',
      orange800: '#9a3412',
      orange900: '#7c2d12',
      red50: '#fef2f2',
      red100: '#fee2e2',
      red200: '#fecaca',
      red300: '#fca5a5',
      red400: '#f87171',
      red500: '#ef4444',
      red600: '#dc2626',
      red700: '#b91c1c',
      red800: '#991b1b',
      red900: '#7f1d1d',
      warmGray50: '#fafaf9',
      warmGray100: '#f5f5f4',
      warmGray200: '#e7e5e4',
      warmGray300: '#d6d3d1',
      warmGray400: '#a8a29e',
      warmGray500: '#78716c',
      warmGray600: '#57534e',
      warmGray700: '#44403c',
      warmGray800: '#292524',
      warmGray900: '#1c1917',
      trueGray50: '#fafafa',
      trueGray100: '#f5f5f5',
      trueGray200: '#e5e5e5',
      trueGray300: '#d4d4d4',
      trueGray400: '#a3a3a3',
      trueGray500: '#737373',
      trueGray600: '#525252',
      trueGray700: '#404040',
      trueGray800: '#262626',
      trueGray900: '#171717',
      gray50: '#fafafa',
      gray100: '#f4f4f5',
      gray200: '#e4e4e7',
      gray300: '#d4d4d8',
      gray400: '#a1a1aa',
      gray500: '#71717a',
      gray600: '#52525b',
      gray700: '#3f3f46',
      gray800: '#27272a',
      gray900: '#18181b',
      coolGray50: '#f9fafb',
      coolGray100: '#f3f4f6',
      coolGray200: '#e5e7eb',
      coolGray300: '#d1d5db',
      coolGray400: '#9ca3af',
      coolGray500: '#6b7280',
      coolGray600: '#4b5563',
      coolGray700: '#374151',
      coolGray800: '#1f2937',
      coolGray900: '#111827',
      blueGray50: '#f8fafc',
      blueGray100: '#f1f5f9',
      blueGray200: '#e2e8f0',
      blueGray300: '#cbd5e1',
      blueGray400: '#94a3b8',
      blueGray500: '#64748b',
      blueGray600: '#475569',
      blueGray700: '#334155',
      blueGray800: '#1e293b',
      blueGray900: '#0f172a',
      dark50: '#18181b',
      dark100: '#27272a',
      dark200: '#3f3f46',
      dark300: '#52525b',
      dark400: '#71717a',
      dark500: '#a1a1aa',
      dark600: '#d4d4d8',
      dark700: '#e4e4e7',
      dark800: '#f4f4f5',
      dark900: '#fafafa',
      text50: '#fafafa',
      text100: '#f5f5f5',
      text200: '#e5e5e5',
      text300: '#d4d4d4',
      text400: '#a3a3a3',
      text500: '#737373',
      text600: '#525252',
      text700: '#404040',
      text800: '#262626',
      text900: '#171717',
    },
    space: {
      'px': '1px',
      '0': 0,
      '0.5': 2,
      '1': 4,
      '1.5': 6,
      '2': 8,
      '2.5': 10,
      '3': 12,
      '3.5': 14,
      '4': 16,
      '5': 20,
      '6': 24,
      '7': 28,
      '8': 32,
      '9': 36,
      '10': 40,
      '12': 48,
      '16': 64,
      '20': 80,
      '24': 96,
      '32': 128,
      '40': 160,
      '48': 192,
      '56': 224,
      '64': 256,
      '72': 288,
      '80': 320,
      '96': 384,
      '1/2': '50%',
      '1/3': '33.333%',
      '2/3': '66.666%',
      '1/4': '25%',
      '2/4': '50%',
      '3/4': '75%',
      '1/5': '20%',
      '2/5': '40%',
      '3/5': '60%',
      '4/5': '80%',
      '1/6': '16.666%',
      '2/6': '33.333%',
      '3/6': '50%',
      '4/6': '66.666%',
      '5/6': '83.333%',
      'full': '100%',
    },
    borderWidths: {
      '0': 0,
      '1': '1px',
      '2': '2px',
      '4': '4px',
      '8': '8px',
    },
    radii: {
      'none': 0,
      'xs': 2,
      'sm': 4,
      'md': 6,
      'lg': 8,
      'xl': 12,
      '2xl': 16,
      '3xl': 24,
      'full': 9999,
    },
    letterSpacings: {
      'xs': '-0.05em',
      'sm': '-0.025em',
      'md': 0,
      'lg': '0.025em',
      'xl': '0.05em',
      '2xl': '0.1em',
    },
    lineHeights: {
      '2xs': '1em',
      'xs': '1.125em',
      'sm': '1.25em',
      'md': '1.375em',
      'lg': '1.5em',
      'xl': '1.75em',
      '2xl': '2em',
      '3xl': '2.5em',
      '4xl': '3em',
      '5xl': '4em',
    },
    fontWeights: {
      hairline: 100,
      thin: 200,
      light: 300,
      normal: 400,
      medium: 500,
      semibold: 600,
      bold: 700,
      extrabold: 800,
      black: 900,
      extraBlack: 950,
    },
    fonts: {
      heading: undefined,
      body: undefined,
      mono: undefined,
    },
    fontSizes: {
      '2xs': 10,
      'xs': 12,
      'sm': 14,
      'md': 16,
      'lg': 18,
      'xl': 20,
      '2xl': 24,
      '3xl': 30,
      '4xl': 36,
      '5xl': 48,
      '6xl': 60,
      '7xl': 72,
      '8xl': 96,
      '9xl': 128,
    },

    platforms: ['web', 'android', 'ios'],
  },

  //TODO: Update this after media queries are implemented
  mediaQueries: {
    sm: '@media (min-width: 640px)',
    md: '@media (min-width: 640px)',
    lg: '@media (min-width: 640px)',
    xl: '@media (min-width: 640px)',
    xxl: '@media (min-width: 640px)',
  },
} as const);

const Box = styled(
  Pressable,
  {
    baseStyle: {
      style: {
        bg: '$blue500',
        p: '$6',
        rounded: '$full',
      },
      state: {
        hover: {
          style: {
            bg: '$colors$red300',
          },
        },
      },
    },
    variants: {
      greenBox: {
        style: {
          bg: '$green500',
        },
        state: {
          hover: {
            style: {
              bg: '$green600',
            },
          },
        },
      },
    },
  },
  {}
);

export default function App() {
  const [isPressed, setIsPressed] = React.useState(false);
  const [isHovered, setisHovered] = React.useState(false);

  return (
    <View style={styles.container}>
      <Box
        onPressIn={() => setIsPressed(true)}
        onPressOut={() => setIsPressed(false)}
        onHoverIn={() => setisHovered(true)}
        onHoverOut={() => setisHovered(false)}
        // variant="greenBox"
        // bg="$red500"
        // hover-bg="$green600"
        // hover-web-bg="$amber600"
        // active-p="$8"
        // // active-bg="$blue600"
        // active-backgroundColor="$pink600"
        // web-bg="$blue600"
        // web-hover-bg="$gray600"
        // web-hover-p="$8"
        // // md-w="$100"
        // sm-w="$50"
        // sm-bg="$red500"
        // sm-hover-p="$6"
        // // md-hover-bg="$green600"
        // // md-hover-ios-bg="$green600"
        // hover-xxl-bg="$red500"
        // active-xxl-bg="$red500"
        // xxl-light-bg="$green600"
        // hover-light-sm-bg="$green600"
        states={{
          hover: isHovered,
          active: isPressed,
        }}
        sx={{
          platform: {
            web: {
              state: {
                hover: {
                  style: {
                    bg: '$amber600',
                    // p: '$8',
                  },
                },
              },
            },
          },
          state: {
            hover: {
              style: {
                bg: '$red500',
              },
            },
          },
        }}
      >
        Hello Box
      </Box>
      <TestComp />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
