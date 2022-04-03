import styled from "styled-components";

function Habito(props) {
    const { id, habito, dias } = props;

    const todosDiasDaSemana = ["D", "S", "T", "Q", "Q", "S", "S"];

    const diasDaSemana = todosDiasDaSemana.map((dia, index) =>
        <DiaDaSemana
            key={index}
            selecionado={dias.includes(index)}>
            {dia}
        </DiaDaSemana>);


    return (
        <ArticleHabito>
            <Container>
                <h3>{habito}</h3>
                <DiasDaSemana>
                    {diasDaSemana}
                </DiasDaSemana>
            </Container>
        </ArticleHabito>
    )
}

export default Habito;

function definirBackgrounColor(selecionado) {
    if (selecionado) {
        return "#DBDBDB";
    }

    return "#FFFFFF";
}

function definirColor(selecionado) {
    if (selecionado) {
        return "#FFFFFF";
    }

    return "#DBDBDB";
}

const ArticleHabito = styled.article`
    width: 340px;
    height: fit-content;

    background: var(--cor-bg-habito);
    border-radius: 5px;

    padding-top: 13px;
    padding-bottom: 15px;

    margin-bottom: 10px;
`;

const Container = styled.div`
    display: flex;
    flex-direction: column;
    margin-left: 15px;

    h3 {
        max-width: 290px;
        
        font-weight: 400;
        font-size: 20px;    
        line-height: 25px;

        color: var(--cor-habito);
    }
`;

const DiasDaSemana = styled.div`
    display: flex;
    margin-top: 8px;
`;

const DiaDaSemana = styled.div`
    width: 30px;    
    height: 30px;

    border: var(--borda-input);
    border-radius: var(--borda-input-radius);

    display: flex;
    justify-content: center;
    align-items: center;
    text-align: center;

    background-color: ${(props) => definirBackgrounColor(props.selecionado)};
    color: ${(props) => definirColor(props.selecionado)};

    margin-right: 4px;
`;