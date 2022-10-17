import React, { useEffect,useState } from 'react'

function Info(){
    const [name, setName]=useState('');
    const [nickname,setNickname] = useState('');

    const onChangeName = (e) => {
        setName(e.target.value)
    }
    const onChangeNickname = e => {
        setNickname(e.target.value);
    }
    useEffect(()=>{
        console.log("랜더링이 완료되었습니다 componentDidMount()");
        console.log({name,nickname});
    },[name,nickname]);//componentDidupdate()
    return (
        <div>
            <div>
                <input onChange = {onChangeName} />
                <input value={nickname} onChange={onChangeNickname} />
            </div>
            <div><b>이름:</b>{name}</div>
            <div><b>닉네임:</b>{nickname}</div>
        </div>
    )
}
export default Info