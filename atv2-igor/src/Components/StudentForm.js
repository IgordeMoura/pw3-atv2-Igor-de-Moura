import { useState } from 'react';
import InputMask from 'react-input-mask';

function StudentForm(){
    const [name, setName] = useState("");
    const [cpf, setCpf] = useState("");
    const [rg, setRg] = useState("");
    const [telephoneStudent, setTelephoneStudent] = useState("");
    const [telephoneResponsible, setTelephoneResponsible] = useState("");
    const [email, setEmail] = useState("");
    const [dateOfBirth, setDateOfBirth] = useState("");


    return(
        <div className='card_form'>
            <form onSubmit={StudentForm} className='form'>
                
                <h1>FORMULÁRIO DE CADASTRO ALUNO</h1>

                <label>Digite o Seu Nome Aqui</label>
                <input
                    type='text'
                    value={name}
                    onChange={(event)=>{setName(event.target.value)}}
                    required
                />

                <label>Digite o Seu CPF Aqui</label>
                <InputMask
                    value={cpf}
                    onChange={(event)=>{setCpf(event.target.value)}}
                    required
                    mask='999.999.999-99'
                />

                <label>Digite o Seu RG Aqui</label>
                <input
                    value={rg}
                    onChange={(event)=>{setRg(event.target.value)}}
                    required                    
                    mask='(99) 99999-9999'
                />

                <label>Digite o Seu Telefone Aqui</label>
                <InputMask
                    type='tel'
                    value={telephoneStudent}
                    onChange={(event)=>{setTelephoneStudent(event.target.value)}}
                    required
                    mask='(99) 99999-9999'
                />

                <label>Digite o Telefone Do Seu Responsavel Aqui</label>
                <InputMask
                    value={telephoneResponsible}
                    onChange={(event)=>{setTelephoneResponsible(event.target.value)}}
                    required
                    mask='(99) 99999-9999'
                />

                <label>Digite o Seu Melhor Email Aqui</label>
                <input
                    type='email'
                    value={email}
                    onChange={(event)=>{setEmail(event.target.value)}}
                    required
                />


                <label>Digite Sua Data De Nascimento Aqui</label>
                <input
                    id='teste'
                    type='date'
                    value={dateOfBirth}
                    onChange={(event)=>{setDateOfBirth(event.target.value)}}
                    required
                />

                <button  type='submit'>CADASTRAR</button>
                
            </ form>
        </div>
    );
}

export default StudentForm;