import React, {createContext, useState, useContext, useEffect} from 'react';
import {Appearance, useColorScheme} from 'react-native';

const LightColors = {
  appColor: '#004643B2',
  white: '#FFFFFF',
  black: '#000000',
  disabled: '#BFBFBF',
  transparent: 'transparent',
  bgColor2: '#FFFFFF',
  bgColor3: '#787878',
  bgColor4: '#A8A8A9',
  bgColor5: '#F8F8F8',
  bgColor9: '#E4E0EF',
  bgColor10: '#FCFCFC',
  textColor8: '#A9A8A9',
  bgColor13: '#ECFBEE',
  bgColor14: '#EFF0F3',
  textColor3: '#000000',
  textColor5: '#F84D42',
  textColor10: '#A8A8A9',
  textColor25: '#F8C660',
  textColor26: '#B93513',
  textColor28: '#f7ce4e',
  textColor29: '#004aad',
  borderColor5: '#E8DDF8',
  borderColor7: '#E6E6E6',
  gradColor1: 'transparent',
  gradColor2: '#3D3D3D',
};

const DarkColors = {
  appColor: '#1C1C1EB2',
  white: '#000000',
  black: '#FFFFFF',
  disabled: '#4F4F4F',
  transparent: 'transparent',
  bgColor2: '#121212',
  bgColor3: '#787878',
  bgColor4: '#333333',
  bgColor5: '#1A1A1A',
  bgColor9: '#2E2E2E',
  bgColor10: '#1B1B1B',
  textColor8: '#A9A8A9',
  bgColor13: '#1F2D1F',
  bgColor14: '#1D1E21',
  textColor3: '#FFFFFF',
  textColor5: '#F84D42',
  textColor10: '#808080',
  textColor25: '#D6A840',
  textColor26: '#FA8072',
  textColor28: '#FFD700',
  textColor29: '#77B3F5',
  borderColor5: '#3D3D3D',
  borderColor7: '#2C2C2C',
  gradColor1: 'transparent',
  gradColor2: '#2E2E2E',
};

const ThemeContext = createContext({
  theme: LightColors,
  toggleTheme: () => {},
});

export const ThemeProvider = ({children}: any) => {
  const colorScheme = Appearance.getColorScheme();
  const [theme, setTheme] = useState(
    colorScheme === 'dark' ? DarkColors : LightColors,
  );

  useEffect(() => {
    const subscription = Appearance.addChangeListener(({colorScheme}) => {
      setTheme(colorScheme === 'dark' ? DarkColors : LightColors);
    });
    return () => subscription.remove();
  }, []);

  const toggleTheme = () => {
    setTheme(prevTheme =>
      prevTheme === LightColors ? DarkColors : LightColors,
    );
  };

  return (
    <ThemeContext.Provider value={{theme, toggleTheme}}>
      {children}
    </ThemeContext.Provider>
  );
};

export const useTheme = () => useContext(ThemeContext);
