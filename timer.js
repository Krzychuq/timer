licznik= '';
barlicznik= '';
const przycisk = document.getElementsByClassName('przycisk');
const timebarB = document.getElementsByClassName('timebarB');
    function aktywuj(){
        licznik= setInterval(timer, 1000);
        barlicznik= setInterval(bar, 1000);
        document.getElementById('timebar').style.width = '100%';
        document.getElementById('time').innerHTML = 10;
        liczba = 100;
        odliczanie = czas;
        document.getElementById('but').style.display='none';
        document.getElementById('but').removeAttribute('onclick');
    }

var czas= 10;
var odliczanie = czas;
document.getElementById('time').innerHTML = czas;
liczba = 100;
procent = '%';
dlugosc = '';
    function timer(){
        odliczanie--;
        document.getElementById('time').innerHTML= odliczanie;
            if(odliczanie == 0){
                clearInterval(licznik);
            }
    }
    function bar(){
        liczba -=10;
        dlugosc = liczba + procent;
        document.getElementById('timebar').style.width = dlugosc;
            if(liczba == 60){
                document.getElementById('timebar').style.backgroundColor = 'orange';
            }
            else if(liczba == 30){
                document.getElementById('timebar').style.backgroundColor = 'red';
            }
            else if(liczba == 0){
                clearInterval(barlicznik);
                document.getElementById('but').style.display='block';
                document.getElementById('but').setAttribute('onclick','aktywuj()');
                document.getElementById('timebar').style.backgroundColor = 'green';
            }
    }



