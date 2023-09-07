import {
  StatusBar,
  SafeAreaView
} from "react-native";
import styled  from "styled-components/native";

// 因為 ios 的 StatusBar.currentHeight 是 null ，
// 所以如果直接寫 margin-top: ${StatusBar.currentHeight}px 在 ios 可能會跳錯誤
// 如果沒有加上 flex: 1 的話，最後一張卡片會被 safeArea 擋住喔！
export const SafeArea = styled(SafeAreaView)`
  flex: 1;
  ${StatusBar.currentHeight && `margin-top: ${StatusBar.currentHeight}px`};
`