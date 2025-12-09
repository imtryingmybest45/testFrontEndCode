function TheConjuring2(props){
      const { name } = props; // Destructure the prop
      return (
        <div>
            <p style={{ whiteSpace: 'pre-wrap' }}>{name}</p>
        </div>
      );
    }

export default TheConjuring2;
