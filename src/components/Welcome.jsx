function welcome(props){
    const { name } = props;

    return (
        <div>
        
          <h2>{name}님, 환영합니다!</h2>
          <button>로그아웃</button>
        </div>
    );
}

export default welcome;