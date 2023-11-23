import { useEffect, useState } from "react";
import autenticaStore from "../../stores/autentica.store";
import { useRouter } from "next/router";

export default function RotaPrivada({ children }) {
  const router = useRouter();
  const { estaAutentica } = autenticaStore;
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const checkAuthAndRedirect = async () => {
      if (!estaAutentica) {
        try {
          await router.push("/login");
        } catch (error) {
          console.error("Erro ao redirecionar para a página de login:", error);
        } finally {
          setIsLoading(false);
        }
      } else {
        setIsLoading(false);
      }
    };

    checkAuthAndRedirect();
  }, [estaAutentica, router]);

  // Se ainda estiver carregando, retorne um indicador de carregamento ou null
  if (isLoading) {
    return null; // ou um indicador de carregamento
  }

  // Renderize os componentes children se o usuário estiver autenticado
  return estaAutentica ? <>{children}</> : null;
}