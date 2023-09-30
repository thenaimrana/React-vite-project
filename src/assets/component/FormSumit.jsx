// Class-23 FormSubmit 

const FormSumit = () => {

    const FormInputData = (e)=>{
        e.preventDefault();
        alert("May Allah Help me")
    }


    return (
        <div>
            <h2>Form Submit Data</h2>
        <form>
            <input type="text" placeholder="Name" />
            <button onClick={FormInputData}>Submit</button>
        </form>

        </div>
    );
};

export default FormSumit;