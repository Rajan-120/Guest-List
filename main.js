names_of_the_people = [];
function show_names() {
    var names = document.getElementById("add_names").value;
    names_of_the_people.push(names);
    document.getElementById("show_normal_names").innerHTML = names_of_the_people;
    document.getElementById("button_align").style.display="inline-block";
    document.getElementById("button_sort").style.display="inline-block";
}

function align_names_horizontly() {
    aligned_names = names_of_the_people.join("<br>");
    document.getElementById("horizontly_aligned_names").innerHTML = aligned_names;
    console.log(aligned_names);
}

function sort_names() {
    var sort = names_of_the_people.sort();
    sort = sort.join("<br>")
    document.getElementById("sorted_names").innerHTML = sort;
    document.getElementById("heading_sorted_names").style.display="inline-block";
}

function find() {
    var getValue = document.getElementById("search_input").value;
    var found = 0;
    for (var j = 0; j < names_of_the_people.length; j++) {
        if (getValue == names_of_the_people[j]) {
            found = found + 1;
        }
    }
    document.getElementById("founded_name").innerHTML = "name found  "+ found + "  time/s";
    console.log("name found" + found + time/s);
}