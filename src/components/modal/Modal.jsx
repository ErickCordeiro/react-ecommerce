import { useState } from "react";
import logo from "../../components/assets/images/logo.svg";
import "./Modal.css";

export function Modal() {
  const [login, setLogin] = useState(false);
  const [register, setRegister] = useState(false);

  const handleShowLogin = () => {
    setLogin(true);
  };

  const handleShowRegister = () => {
    setRegister(true);
  };

  return (
    <>
      <div className="overlay"></div>
      <div className="modal-login">
        <div className="modal-login__logo">
          <img src={logo} alt="" />
        </div>

        {!login && !register && (
          <div className="modal-login__btn_actions">
            <button onClick={handleShowLogin}>Fazer Login</button>
            <button
              onClick={handleShowRegister}
              style={{ backgroundColor: "#0f3460", color: "#fff" }}
            >
              Quero me cadastrar
            </button>
          </div>
        )}

        {login && (
          <div className="modal-login__form_login">
            <h2>Entrar</h2>
            <form>
              <label>
                <span>E-mail</span>
                <input type="email" placeholder="Digite seu e-mail" />
              </label>

              <label>
                <span>Senha</span>
                <input type="password" placeholder="Digite sua senha" />
              </label>

              <label className="modal-login__btn_actions">
                <button style={{ backgroundColor: "#0f3460", color: "#fff" }}>
                  Entrar
                </button>
              </label>
            </form>
          </div>
        )}

        {register && (
          <div className="modal-login__form_login">
            <h2>Cadastre-se</h2>
            <form>
              <label>
                <span>Nome</span>
                <input type="text" placeholder="Digite seu nome" />
              </label>
              <label>
                <span>E-mail</span>
                <input type="email" placeholder="Digite seu e-mail" />
              </label>

              <label>
                <span>Confirmar E-mail</span>
                <input type="email" placeholder="Repita seu e-mail" />
              </label>

              <label>
                <span>Senha</span>
                <input type="password" placeholder="Digite sua senha" />
              </label>

              <label>
                <span>Confirmar Senha</span>
                <input type="password" placeholder="Repita sua senha" />
              </label>

              <label className="modal-login__btn_actions">
                <button style={{ backgroundColor: "#0f3460", color: "#fff", width: "100% !important" }}>
                  Cadastrar
                </button>
              </label>
            </form>
          </div>
        )}
      </div>
    </>
  );
}
