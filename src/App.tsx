import { Envelope, Lock } from "phosphor-react";
import { Button } from "./components/Button";
import { CheckBox } from "./components/Checkbox";
import { Heading } from "./components/Heading";
import { Logo } from "./components/Logo";
import { Text } from "./components/Text";
import { TextInput } from "./components/TextInput";
import "./styles/global.css";

export function App() {
  return (
    <div className="w-screen h-screen bg-gray-900  flex-col flex text-gray-100 items-center justify-center ">
      <header className="flex flex-col justify-center items-center">
        <Logo className="w-24 h-24" />
        <Heading size="2xl" className="mt-4">
          Ignite Lab
        </Heading>
        <Text className="text-gray-400 mt-2" size="lg">
          Faça login e comece a usar
        </Text>
      </header>

      <form className="flex flex-col items-stretch w-full gap-4 max-w-sm mt-10">
        <label htmlFor="email" className="flex flex-col gap-3">
          <Text className="font-semibold">Endereço de e-mail</Text>
          <TextInput.Root>
            <TextInput.Icon>
              <Envelope />
            </TextInput.Icon>
            <TextInput.Input
              id="email"
              type="email"
              placeholder="Diigte seu e-mail"
            />
          </TextInput.Root>
        </label>
        <label htmlFor="password" className="flex flex-col gap-3">
          <Text className="font-semibold">Sua senha</Text>
          <TextInput.Root>
            <TextInput.Icon>
              <Lock />
            </TextInput.Icon>
            <TextInput.Input
              id="password"
              type="password"
              placeholder="*************"
            />
          </TextInput.Root>
        </label>

        <label
          htmlFor="remember"
          className="flex items-start gap-4 justify-start"
        >
          <CheckBox id="remember" />
          <Text size="sm" className="text-gray-200">
            Lembrar de mim por 30 dias
          </Text>
        </label>
        <Button className="mt-4" size="md" type="submit">
          Entrar na plataforma
        </Button>
      </form>

      <footer className="flex flex-col items-center gap-4 mt-8">
        <Text asChild size="sm">
          <a href="#" className="underline text-gray-400 hover:text-gray-200">
            Esqueceu sua senha?
          </a>
        </Text>
        <Text asChild size="sm">
          <a href="#" className="underline text-gray-400 hover:text-gray-200">
            Não possui conta? Crie uma agora!
          </a>
        </Text>
      </footer>
    </div>
  );
}
