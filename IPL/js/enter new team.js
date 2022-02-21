
function pas(){
  console.log("hello");
}
function showForm(){
  console.log("asdf as");
  document.getElementById("form1").style.display="block";
}
function showteam()
            {
              document.getElementById("form1").style.display="none";
            document.getElementById("showTeams").innerHTML="";
            let allTeams=new Array();
            allTeams=JSON.parse(localStorage.getItem("allTeams"))?JSON.parse(localStorage.getItem("allTeams")):[]

            if(allTeams)
            {
                for(let i=0;i<allTeams.length;i++)
                {
            var table=`<tr>
            <td>${allTeams[i].teamName}</td>
            <td>${allTeams[i].fullName}</td>
            <td>${allTeams[i].logo}</td>
            <td>${allTeams[i].playerCount}</td>
            <td>${allTeams[i].tbatsman}</td>
            <td>${allTeams[i].tbolwer}</td>
            <td>${allTeams[i].won}</td>
            <td>Click</td>
            </tr>`
            document.getElementById("showTeams").innerHTML+=table
                }
            }
            }
function saveTeamName()
            {
            
            let teamName=document.getElementById("teamName").value;
            let fullName=document.getElementById("fullName").value;
            let logo=document.getElementById("logo").value;
            let playerCount=document.getElementById("playerCount").value;
            let tbatsman=document.getElementById("tbatsman").value;
            let tbolwer=document.getElementById("tbowler").value;
            let won=document.getElementById("won").value;
            
            let allTeams=new Array();
            allTeams=JSON.parse(localStorage.getItem("allTeams"))?JSON.parse(localStorage.getItem("allTeams")):[]
            if(teamName===""){
              alert("Enter the team name don't enter a blank space")  
            }
            else{
              if(allTeams.some((v)=>{return v.teamName==teamName}))
            {
            alert("This Team Already Exits");
            }
            else
            {
            allTeams.push({
            "teamName":teamName,
            "fullName":fullName,
            "logo":logo,
            "playerCount":playerCount,
            "tbatsman":tbatsman,
            "tbolwer":tbolwer,
            "won":won
            })
            localStorage.setItem("allTeams",JSON.stringify(allTeams));
            }
            showteam();
            }  
            }
            