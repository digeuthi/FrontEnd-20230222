const onSubmitHandler = () => {
    const id = document.getElementById('id').value;

    if(!id.trim()){
        document.getElementById('diMsg').style.display = 'block';
        document.getElementById('pswd1Msg').style.display = 'block';
        document.getElementById('pswd2Msg').style.display = 'block';
        document.getElementById('nameMsg').style.display = 'block';
        document.getElementById('birthdayMsg').style.display = 'block';
        document.getElementById('genderMsg').style.display = 'block';
        return;
    }
    document.getElementById('diMsg').style.display = 'none';
    document.getElementById('pswd1Msg').style.display = 'none';
    document.getElementById('pswd2Msg').style.display = 'none';
    document.getElementById('nameMsg').style.display = 'none';
    document.getElementById('birthdayMsg').style.display = 'none';
    document.getElementById('genderMsg').style.display = 'none';

    const form = document.getElementById('join_form');
    form.submit();
}