
const timetable = `
<table border="1" cellpadding="8" cellspacing="0">
  <tr>
    <th>DAY</th>
    <th>8:50-9:40 <br> L1</th>
    <th>9:40-10:30 <br> L2</th>
    <th>10:40-11:30 <br> L3</th>
    <th>11:30-12:20 <br> L4</th>
    <th>12:20-1:10</th>
    <th>1:10-2:00 <br> L5</th>
    <th>2:00-2:50 <br> L6</th>
    <th>2:50-3:40 <br> L7</th>
    <th>3:40-4:30 <br> L8</th>
  </tr>

  <tr>
    <td>Mon</td>
    <td colspan="2">DBMS-BCS501-(YB)</td>
    <td>CSE(DS)-A || QA/LR <br>(Harshit Sharma)</td>
    <td></td>
    <td rowspan="3">LUNCH</td>
    <td>OOSD-BCS054-(VK)</td>
    <td></td>
    <td colspan="2">DSA Training - Ms. Priyanka Gpta</td>
  </tr>

  <tr>
    <td>Tue</td>
    <td colspan="2">DSA Training - Ms. Priyanka Gpta</td>
    <td>DSA Training - Ms. Priyanka Gpta</td>
    <td>DAA-BCS503-(MP)</td>
    <td>DA-BCDS501-(MS)</td>
    <td>DA-BCDS501-(MS)</td>
    <td>OOSD-BCS054-(VK)</td>
    <td>CSE(DS)-A || SS <br>(Dr. Abriy Thakur)</td>
  </tr>

  <tr>
    <td>Wed</td>
    <td>DAA-BCS503-(MP)</td>
    <td>OOSD-BCS054-(VK)</td>
    <td colspan="2">
      Domain Training:<br>
      DSAIML-LT305<br>
      Cloud-LT307<br>
      Networking & Cyber Security-LT308
    </td>
    <td>AOSC-BCS056-(Shreya)</td>
    <td>DBMS-BCS501-(YB)</td>
    <td>DA Lab-BCDS551-(MS)|(VK)</td>
    <td>DAA-BCS503-(MP)</td>
  </tr>
</table>
`;

document.getElementById("timetable-container").innerHTML = timetable;
