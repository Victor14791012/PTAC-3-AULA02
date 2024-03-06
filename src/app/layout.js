import Menu from "./componentes/Menu";
import Macarrao from "./componentes/Macarrao";
import Map from "./componentes/Map";

export const metadata = {
  title: 'Aulas PTAC',
  description: 'Generated by create next app',
}

export default function RootLayout({ children }) {
  return (
    <html lang="pt-br">
      <body>
        
        <Menu/>
        <Macarrao/>
        <Map/>

        {children}
        </body>
    </html>
  );
}
