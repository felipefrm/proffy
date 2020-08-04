import React from 'react';

import './styles.css'

import whatsappIcon from '../../assets/images/icons/whatsapp.svg'

function TeacherItem() {
    return(
        <article className="teacher-item">
            <header>
                <img src="https://scontent.fjdf1-1.fna.fbcdn.net/v/t1.0-9/47679788_3185885434860671_4227559171563716608_n.jpg?_nc_cat=106&_nc_sid=09cbfe&_nc_eui2=AeEnes4Mo3WDZrafSls_8mCB417I0PUkwQfjXsjQ9STBB8HNuM-kZQReAIBm60Uv3DrpH8-HsGrxcxvObmg0CIk_&_nc_ohc=eAPn1QpTjI8AX-ye68I&_nc_ht=scontent.fjdf1-1.fna&oh=f5450333e6de054deadc4eb422e7151f&oe=5F4FE929" alt="Felipe Melo"/>
                <div>
                    <strong>Felipe Melo</strong>
                    <span>Matemática</span>
                </div>
            </header>
            <p>
                Entusiasta das melhores tecnologias de quimica avançada;
                <br/><br/>
                Apaixonado por explodir coisas em laboratórios e pro mudar a vida das pessoas atráves de expreriências.
            </p>
            <footer>
                <p>
                    Preço/hora
                    <strong>R$ 80,00</strong>
                </p>
                <button type="button">
                    <img src={whatsappIcon} alt="Whatsapp"/>
                    Entrar em contato
                </button>
            </footer>
        </article>
    );
}

export default TeacherItem;