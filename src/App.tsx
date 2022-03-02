import styled from "styled-components";

const TempMaintenance = styled.div`
  display: flex;
  width: 100%;
  height: 100vh;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  & > h2 {
    padding: 0;
    margin: 0;
    font-family: Arial, sans-serif;
    font-size: 34px;
    font-weight: 300;
  }
`

export default function App() {
  return (
    <TempMaintenance>
      <h2>This site is currently undergoing maintenance.</h2>
      <h2 style={{ fontSize: "26px" }}>Follow the repository to be kept in the loop.</h2>
    </TempMaintenance>
  );
}