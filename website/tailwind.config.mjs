/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      // フォントの設定
      fontFamily: {
        sans: [
          'Inter',
          'Helvetica Neue',
          'Arial',
          'Hiragino Kaku Gothic ProN',
          'Hiragino Sans',
          'Meiryo',
          'sans-serif',
        ],
      },
    },
    // カラー設定
    colors: {
      // 背景色
      base: '#FBEED9',
      // 基本色
      black: '#505050',
      // テキストカラー1
      gray: '#27374D',
      // テキストカラー2
      white: '#526D82',
      // テキストカラー3
      blue: '#5D6F89',
      // ダークブルー
      darkblue: '#445D6F',
    },
  },
  plugins: [],
};
