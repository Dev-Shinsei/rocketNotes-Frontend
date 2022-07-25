import { Container, Profile } from "./styles";

export function Header() {
  return (
    <Container>
      <Profile>
        <img
          src="https://github.com/Dev-Shinsei.png"
          alt="Foto de Carlos Gomes"
        />

        <div>
          <span>Bem Vindo</span>
          <strong>Carlos Gomes</strong>
        </div>
      </Profile>
    </Container>
  );
}
