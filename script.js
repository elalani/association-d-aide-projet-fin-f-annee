function afficherpdf(){
    let np = document.getElementById('from');
    let cin = document.getElementById('to');
    // let Téléphone = document.getElementById('too');
    let select1 = document.getElementById('Type de Don');
    let select2 = document.getElementById('Selectione votre don');
    let select3 = document.getElementById('Un don financier');


   


    //les varbiales
    var from_np=document.querySelector('.from-np').value;
    var from_cin=document.querySelector('.from-cin').value;
    // var from_tel=document.querySelector('.from-tel').value;

    // var from_date=document.querySelector('.from-date').value;
    // var from_nt=document.querySelector('.from-nt').value;
    var from_lignes=document.querySelector('.from-lignes').value;
    var from_lignes2=document.querySelector('.from-lignes').value;
    var from_lignes3=document.querySelector('.from-lignes').value;
    var from_lignes4=document.querySelector('.from-lignes').value;
    var body=document.querySelector('body');


    body.innerHTML=`   <div class="piece mx-auto ">
    <div class="logo">
        <img src="image/logo5-removebg-preview.png" alt="">
        <!-- <p>faiz dev générateur PDF</p> -->
    </div>
    <h1>Votre Facture </h1>
    <div class="elements">
        <p>Nom et Prénom: <strong>${np.value}</strong></p>
        <p>Cin: <strong>${cin.value}</strong></p>

        <p>Date De Naissance: <strong>${date.value}</strong></p>
        <p>Type de Don: <strong>${select1.value}</strong></p>
        <p>Un don matériel: <strong>${select2.value}</strong></p>
        <p>Un don financier: <strong>${select3.value}</strong></p>
        


        <div class="certification">
            <img src="image/logo5-removebg-preview.png" alt="" srcset="">
            <!-- <p>Faiz dev</p> -->
        </div>
    </div>
</div>
<div class="generateurBtn justify-content-center">
    <button class="button d-print-none " onclick="window.print()"> Télécharger Le PDF</button>
    <a href="form.html"  class="submit d-print-none">Generer un autre pdf</a>
</div>`

    


}