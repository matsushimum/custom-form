import './App.css';
import {useState} from "react";

function App() {
  const initialValues = {username:"",mailAddress:"",password:""};
  const [formValues,setFormValues] = useState(initialValues);
  const [formErrors,setFormErrors] = useState({});

  const handleChange = (e) => {
    // console.log(e.target);
    const {name,value} = e.target;
    setFormValues({...formValues,[name]:value});
    console.log(formValues);
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    //ログイン情報を送信する。
    //バリデーションチェック
    setFormErrors(validate(formValues));
  }
  
  const validate = (values) => {
    const errors = {};
    if(!values.username){
      errors.username = "ユーザー名を入力してください";
    }
    if(!values.mailAddress){
      errors.username = "メールアドレスを入力してください";
    }
    if(!values.password){
      errors.username = "パスワードを入力してください";
    }
  };

  return (
    <div className="formContainer">
      <form onSubmit={(e) => handleSubmit(e)}>
        <h1>ログインフォーム</h1>
        <hr />
        <div className="uiForm">
          <div className="formField">
            <label>ユーザー名</label>
            <input type="text" placeholder="ユーザー名" name="username" onChange={(e) => handleChange(e)}/>
          </div>
          <div className="formField">
            <label>メールアドレス</label>
            <input type="text" placeholder="メールアドレス" name="mailAddress" onChange={(e) => handleChange(e)}/>
          </div>
          <div className="formField">
            <label>ユーザー名</label>
            <input type="text" placeholder="パスワード" name="password" onChange={(e) => handleChange(e)}/>
          </div>
          <button className="submitButton">ログイン</button>
        </div>
      </form>
    </div>
  );
}

export default App;
