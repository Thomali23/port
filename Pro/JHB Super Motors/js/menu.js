function openNav() {
            document.getElementById("mySidenav").style.width = "48%";
        }

        function closeNav() {
            document.getElementById("mySidenav").style.width = "0";
        }

       $(document).ready(function() {
            $('#Carousel').carousel({
                interval: 5000
            })
        });
