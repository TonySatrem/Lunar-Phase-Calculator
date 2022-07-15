module.exports = drawASCIIMoon;

function drawASCIIMoon (id) {
  switch (id) {
    case 0: return zero; break;
    case 1: return first; break;
    case 2: return second; break;
    case 3: return third; break;
    case 4: return fourth; break;
    case 5: return fifth; break;
    case 6: return sixth; break;
    case 7: return seventh; break;
  }
}

const zero =                  "\t"  + 
              "   .....   " + "\r\n\t" + 
              " ......... " + "\r\n\t" +
              "..........." + "\r\n\t" +
              "..........." + "\r\n\t" +
              " ......... " + "\r\n\t" +
              "   .....   ";

const first =                  "\t" + 
               "   ....#   " + "\r\n\t" + 
               " .......## " + "\r\n\t" +
               "........###" + "\r\n\t" +
               "........###" + "\r\n\t" +
               " .......## " + "\r\n\t" +
               "   ....#   ";

const second =                 "\t" + 
               "   ...##   " + "\r\n\t" + 
               " .....#### " + "\r\n\t" +
               "......#####" + "\r\n\t" +
               "......#####" + "\r\n\t" +
               " .....#### " + "\r\n\t" +
               "   ...##   ";

const third =                   "\t" + 
                "   .####   " + "\r\n\t" + 
                " ..####### " + "\r\n\t" +
                "...########" + "\r\n\t" +
                "...########" + "\r\n\t" +
                " ..####### " + "\r\n\t" +
                "   .####   ";

const fourth =                  "\t" + 
                "   #####   " + "\r\n\t" + 
                " ######### " + "\r\n\t" +
                "###########" + "\r\n\t" +
                "###########" + "\r\n\t" +
                " ######### " + "\r\n\t" +
                "   #####   ";

const fifth =                   "\t" + 
                "   ####.   " + "\r\n\t" + 
                " #######.. " + "\r\n\t" +
                "########..." + "\r\n\t" +
                "########..." + "\r\n\t" +
                " #######.. " + "\r\n\t" +
                "   ####.   ";

const sixth =                   "\t" + 
                "   ##...   " + "\r\n\t" + 
                " ####..... " + "\r\n\t" +
                "#####......" + "\r\n\t" +
                "#####......" + "\r\n\t" +
                " ####..... " + "\r\n\t" +
                "   ##...   ";
 
const seventh =                 "\t" + 
                "   #....   " + "\r\n\t" + 
                " ##....... " + "\r\n\t" +
                "###........" + "\r\n\t" +
                "###........" + "\r\n\t" +
                " ##....... " + "\r\n\t" +
                "   #....   ";
