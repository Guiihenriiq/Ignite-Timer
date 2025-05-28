import { HistoryContainer, HistoryList, Status } from "./styles";

export function History() {
    return <HistoryContainer>
                <h1>Meu histórico</h1>


                <HistoryList> 
                    <table>
                        <thead>
                            <tr>
                                <th>Tarefa</th>
                                <th>Duração</th>
                                <th>Inicio</th>
                                <th>Status</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>Trarefa</td>
                                <td>20minutos</td>
                                <td>Há dois meses</td>
                                <td><Status statusColor="green">Concluido</Status></td>
                            </tr>
                            <tr>
                                <td>Trarefa</td>
                                <td>20minutos</td>
                                <td>Há dois meses</td>
                                <td><Status statusColor="red">Interrompido</Status></td>
                            </tr>
                            <tr>
                                <td>Trarefa</td>
                                <td>20minutos</td>
                                <td>Há dois meses</td>
                                <td><Status statusColor="green">Concluido</Status></td>
                            </tr>
                            <tr>
                                <td>Trarefa</td>
                                <td>20minutos</td>
                                <td>Há dois meses</td>
                                <td><Status statusColor="green">Concluido</Status></td>
                            </tr>
                            <tr>
                                <td>Trarefa</td>
                                <td>20minutos</td>
                                <td>Há dois meses</td>
                                <td><Status statusColor="yellow">Em Andamento</Status></td>
                            </tr>
                            <tr>
                                <td>Trarefa</td>
                                <td>20minutos</td>
                                <td>Há dois meses</td>
                                <td><Status statusColor="green">Concluido</Status></td>
                            </tr>
                            <tr>
                                <td>Trarefa</td>
                                <td>20minutos</td>
                                <td>Há dois meses</td>
                                <td><Status statusColor="yellow">Em Andamento</Status></td>
                            </tr>
                            <tr>
                                <td>Trarefa</td>
                                <td>20minutos</td>
                                <td>Há dois meses</td>
                                <td><Status statusColor="red">Interrompido</Status></td>
                            </tr>
                        </tbody>
                    </table>
                </HistoryList>
            </HistoryContainer>
}