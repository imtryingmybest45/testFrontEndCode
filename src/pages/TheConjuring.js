function TheConjuring(props){
      const { name } = props; // Destructure the prop
      return (
        <div>
            <p style={{ whiteSpace: 'pre-wrap' }}>{name}</p>
        </div>
      );
    }

export default TheConjuring;
