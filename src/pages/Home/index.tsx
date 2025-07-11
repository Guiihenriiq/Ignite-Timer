import { Play } from "phosphor-react";
import {useForm} from 'react-hook-form'
import { zodResolver } from "@hookform/resolvers/zod"; 
import * as zod from 'zod';

import { CountdownContainer, 
         FormContainer, 
         HomeContainer, 
         MinutesAmountInput, 
         Separator, 
         StartCountdownButton, 
         TaskInput } from "./styles";

    const newCycleFormValidationSchema = zod.object({
        task: zod.string().min(3, 'Informe a tarefa').max(100),
        minutesAmount: zod.number().min(5, 'O tempo deve ser de no mínimo 5 minutos').max(60, 'O tempo deve ser de no máximo 60 minutos')
    })

    type NewCycleFormData = zod.infer<typeof newCycleFormValidationSchema>

export function Home() {

   const {register, handleSubmit, watch, reset} = useForm<NewCycleFormData>({
    resolver: zodResolver(newCycleFormValidationSchema),
    defaultValues: {
        task: '',
        minutesAmount: 0,
    }
   })

    function handleCreateNewCycle(data : NewCycleFormData){
        console.log(data)
        reset() 
    }

    const task = watch('task')
    const isSubmitDisabled = !task  

    return (
        <HomeContainer>
            <form onSubmit={handleSubmit(handleCreateNewCycle)} action="">
                <FormContainer>
                    <label htmlFor="task"  >Vou Trabalhar em</label>
                    <TaskInput 
                        id="task" 
                        placeholder="Dê um nome para o seu projeto"
                        list="task-suggestions"
                        {...register('task')}
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
                        {...register('minutesAmount')}
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
                <StartCountdownButton disabled={isSubmitDisabled} type="submit">
                    <Play size={24}/>
                    Começar
                </StartCountdownButton>
            </form>
        </HomeContainer>
    )
}