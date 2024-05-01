import styled from "styled-components";
import {
  Header,
  Selector,
  v,
  ListaPaises,
  useUsuariosStore,
  ListaGenerica,
  TemasData,
  Btnsave,CardEliminarData
  
} from "../../index";
import { useState } from "react";


export function ConfiguracionTemplate() {
  const { datausuarios, editartemamonedauser } = useUsuariosStore();
  const [select, setSelect] = useState({});
  const [selectTema, setSelectTema] = useState({});
  const [state, setState] = useState(false);
  const [stateListaPaises, setStateListaPaises] = useState(false);
  const [stateListaTemas, setStateListaTemas] = useState(false);

  // Validación de datos
  const moneda = select.symbol ?? datausuarios?.moneda ?? 'Desconocido';
  const pais = select.countryName ?? datausuarios?.pais ?? 'Desconocido';
  const paisSeleccionado = `🐷 ${moneda} ${pais}`;

  // Validación de tema
  const temabd = datausuarios?.tema === '0' ? 'light' : 'dark';
  const iconobd = temabd === 'light' ? '🌞' : '🌚';
  const temainicial = selectTema.tema ?? temabd;
  const iconoinicial = selectTema.icono ?? iconobd;
  const temaSeleccionado = `${iconoinicial} ${temainicial}`;

  // Funcion para editar
  const editar = async () => {
    const themeElegido = temainicial === 'light' ? '0' : '1';
    const p = {
      tema: themeElegido,
      moneda,
      pais,
      id: datausuarios?.id ?? 'Desconocido',
    };
    try {
      await editartemamonedauser(p);
    } catch (error) {
      console.error('Error al editar datos:', error);
    }
  };

  return (
    <Container>
      <header className="header">
        <Header
          stateConfig={{ state, setState: () => setState(!state) }}
        />
      </header>

      <section className="area2">
        <h1>AJUSTES</h1>
        <ContentCard>
          <span>Moneda:</span>
          <Selector
            state={stateListaPaises}
            color={v.colorselector}
            texto1={paisSeleccionado}
            funcion={() => setStateListaPaises(!stateListaPaises)}
          />
          {stateListaPaises && (
            <ListaPaises
              setSelect={setSelect}
              setState={() => setStateListaPaises(!stateListaPaises)}
            />
          )}
        </ContentCard>
        
        <ContentCard>
          <span>Tema:</span>
          <Selector
            texto1={temaSeleccionado}
            color={v.colorselector}
            state={stateListaTemas}
            funcion={() => setStateListaTemas(!stateListaTemas)}
          />
          {stateListaTemas && (
            <ListaGenerica
              data={TemasData}
              setState={() => setStateListaTemas(!stateListaTemas)}
              funcion={setSelectTema}
            />
          )}
        </ContentCard>
        
        <Btnsave
          titulo="Guardar"
          bgcolor={v.colorselector}
          icono={<v.iconoguardar />}
          funcion={editar}
        />

        <CardEliminarData />
      </section>
    </Container>
  );
}

const Container = styled.div`
  min-height: 100vh;
  padding: 15px;
  width: 100%;
  background: ${({ theme }) => theme.bgtotal};
  color: ${({ theme }) => theme.text};
  display: grid;
  grid-template:
    "header" 100px
    "area2" auto;

  .header {
    grid-area: header;
    /* background-color: rgba(103, 93, 241, 0.14); */
    display: flex;
    align-items: center;
  }

  .area2 {
    grid-area: area2;
    /* background-color: rgba(77, 237, 106, 0.14); */
    display: flex;
    align-items: center;
    flex-direction: column;
    justify-content: start;
    gap: 30px;
   
    h1 {
      font-size: 3rem;
    }
  }
`;
const ContentCard = styled.div`
  display: flex;
  text-align: start;
  align-items: center;
  gap: 20px;
  position: relative;
  width: 100%;
  justify-content: center;
`;