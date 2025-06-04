import { Play } from "phosphor-react";
import { CountdownContainer, 
         FormContainer, 
         HomeContainer, 
         MinutesAmountInput, 
         Separator, 
         StartCountdownButton, 
         TaskInput } from "./styles";

export function Home() {

    function handleSubmit(event){
        event.target.task
    }

    return (
        <HomeContainer>
            <form onSubmit={handleSubmit} action="">
                <FormContainer>
                    <label htmlFor="task"  >Vou Trabalhar em</label>
                    <TaskInput 
                        id="task" 
                        name="task"
                        placeholder="Dê um nome para o seu projeto"
                        list="task-suggestions"
                    />
                    <datalist id="task-suggestions">
                        <option value="Projeto 1"/>
                        <option value="Projeto 2"/>
                        <option value="Projeto 3"/>
                        <option value="Projeto 4"/>
                    </datalist>

                    <label htmlFor="">durante</label>
                    <MinutesAmountInput 
                        type="number" 
                        id="minutesAmount" 
                        placeholder="00"
                        step={5}
                        min={5}
                        max={60}
                    />
                    <span>Minutos.</span>
                </FormContainer>

                <CountdownContainer>
                    <span>0</span>
                    <span>0</span>
                    <Separator>:</Separator>
                    <span>0</span>
                    <span>0</span>
                </CountdownContainer>
                <StartCountdownButton disabled={!task} type="submit">
                    <Play size={24}/>
                    Começar
                </StartCountdownButton>
            </form>
        </HomeContainer>
    )
}