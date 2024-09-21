var names = [
    "Tariq", "Ali", "Rami", "Sara", "Huda", "Lina", "Ahmad", "Yara", "Mona", "Omar",
    "Noor", "Amira", "Fadi", "Hassan", "Aya", "Khalid", "Leila", "Samer", "Zain", "Nadine",
    "Ibrahim", "Hana", "Mahmoud", "Nour", "Rania", "Salim", "Rasha", "Adel", "Basma", "Waleed",
    "Yousef", "Mariam", "Samira", "Issa", "Farah", "Bilal", "Laila", "Jana", "Mustafa", "Naji",
    "Dina", "Hatem", "Maya", "Tamer", "Loubna", "Saif", "Fayez", "Salma", "Reem", "Zahra",
    "Yazan", "Nabil", "Ola", "Rita", "Jawad", "Shadi", "Kamil", "Nada", "Ibtisam", "Basel",
    "Ziad", "Manal", "Tala", "Anas", "Ghada", "Jamil", "Rabab", "Sami", "Rayan", "Fatima",
    "Walid", "Nourhan", "Karim", "Maysa", "Firas", "Amal", "Lamis", "Sahar", "Rafik", "Iman",
    "Mohammad", "Lamar", "Majed", "Tania", "Ayman", "Shereen", "Qasem", "Haifa", "Bassam", "Nada",
    "Alaa", "Marwa", "Sameh", "Noura", "Murad", "Afaf", "Nizar", "Rida", "Aziz", "Dalia"
    ];

    var tablelenght = names.length;
  //  console.log(tablelenght);

   // console.log(document.querySelector("#tableOfName"));
var tablename = "<table border='1'> <thead> <tr> <td>Name</td> </tr> </thead> <tbody>";
      

            for (var i = 0; i < tablelenght; i++) {
                tablename += `<tr><td> ${names[i]} </td></tr>`;
            }
            tablename += "</tbody></table>";

            document.querySelector("#tableOfName").innerHTML = tablename;

