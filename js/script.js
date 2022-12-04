// Custom Loader Element Node
var loader = document.createElement("div");
loader.setAttribute("id", "pre-loader");
loader.innerHTML = "<div class='lds-hourglass'></div>";

// Loader Start Function
window.start_loader = function () {
  if (
    !document.getElementById("pre-loader") ||
    (!!document.getElementById("pre-loader") &&
      document.getElementById("pre-loader").length <= 0)
  )
  console.log("function loaded!!!!!!");
    document.querySelector("body").appendChild(loader);
    
};



// Loader Stop Function
window.end_loader = function () {
  if (!!document.getElementById("pre-loader")) {
    setTimeout(() => {
      document.getElementById("pre-loader").remove();
    }, 500);
  }
};
rec_arr = [
    {
      id: 905421402225,
      recipe: "Butter Chicken",
      description:
        "Place all the ingredients for the marinade in a bowl, add the chicken and toss until completely coated. Cover and leave to marinate for at least 2 hours or overnight. Heat a large casserole over a high heat and cook in batches until cooked all the way through and the chicken has deep char marks. Baste with the melted butter and lemon juice while the chicken cooks. Remove from the pot and set aside once cooked. For the sauce add the butter to the casserole. When it’s melted add in the cardamom and onions. Cook for 8 minutes until softened and slightly browned. Add in the garlic, ginger and chilli and continue to cook for 2 minutes. Stir through the garam masala, cumin, coriander, chilli powder and tomato puree. Lower the heat and stirring continuously slowly add the cream until well combined. Bring to a low simmer and season with sea salt to taste. Stir through the chicken and cook until it’s warmed through. Serve the butter chicken with basmati rice and naan breads.",
      ingredients: [
        {
          ingredient: "500g boneless, skinless chicken thighs",
          is_checked: true,
        },
        { ingredient: "50g butter, melted", is_checked: true },
        { ingredient: "Juice of 1 lemon", is_checked: true },
        { ingredient: "150ml plain yoghurt", is_checked: true },
        { ingredient: "ginger", is_checked: true },
        { ingredient: "3 garlic", is_checked: true },
        { ingredient: "1 tbsp garam masala", is_checked: true },
        { ingredient: "1 tsp cumin", is_checked: true },
        { ingredient: "2 tsp ground coriander", is_checked: true },
        { ingredient: "50g butter", is_checked: true },
        { ingredient: "1 onion, finely chopped", is_checked: true },
        { ingredient: "4 green cardamom pods", is_checked: true },
        { ingredient: "Sea salt", is_checked: true },
      ],
    },
    {
      id: 270431030774,
      recipe: "Chicken Biryani",
      description:
        "Soak 300g basmati rice in warm water, then wash in cold until the water runs clear. Heat 25g butter in a saucepan and cook 1 finely sliced large onion with 1 bay leaf, 3 cardamom pods and 1 small cinnamon stick for 10 mins. Sprinkle in 1 tsp turmeric, then add 4 chicken breasts, cut into large chunks, and 4 tbsp curry paste. Cook until aromatic. Stir the rice into the pan with 85g raisins, then pour over 850ml chicken stock. Place a tight-fitting lid on the pan and bring to a hard boil, then lower the heat to a minimum and cook the rice for another 5 mins. Turn off the heat and leave for 10 mins. Stir well, mixing through 15g chopped coriander. To serve, scatter over the leaves of the remaining 15g coriander and 2 tbsp toasted almonds.",
      ingredients: [{ ingredient: "300g basmati rice ", is_checked: true }],
      ingredients: [{ ingredient: "25g butter ", is_checked: true }],
      ingredients: [{ ingredient: "1 large onion ", is_checked: true }],
      ingredients: [{ ingredient: "1 bay leaf ", is_checked: true }],
      ingredients: [{ ingredient: "3 cardamom pods ", is_checked: true }],
      ingredients: [{ ingredient: "small cinnamon stick ", is_checked: true }],
      ingredients: [{ ingredient: "1 tsp turmeric ", is_checked: true }],
      ingredients: [
        { ingredient: "4 skinless chicken breasts ", is_checked: true },
      ],
      ingredients: [
        { ingredient: "4 tbsp balti curry paste ", is_checked: true },
      ],
      ingredients: [{ ingredient: "85g raisins ", is_checked: true }],
      ingredients: [{ ingredient: "850ml chicken stock ", is_checked: true }],
      ingredients: [{ ingredient: "30g coriander ", is_checked: true }],
      ingredients: [{ ingredient: "almonds ", is_checked: true }],
    },
    {
      id: 814606809232,
      recipe: "Rajma Gravy",
      description:
        "Sort dried beans and discard any misshapen or discolored beans. Rinse a couple of times, and then soak 1 cup rajma (kidney beans) in enough water to cover them. Soaking should ideally last for 8 to 9 hours, so I usually soak them the night before I cook. Once the beans are well soaked, discard the soaking water. Drain and rinse the soaked beans a few times to remove any leftover grit, if any. Add the rinsed and drained kidney beans to a 3 litre pressure cooker. Add 3.5 to 4 cups of water and stir. Pressure cook the rajma for 18 to 20 whistles (or for about 15 to 20 minutes). While the kidney beans are cooking, chop 1 large onion (¾ to 1 cup finely chopped onion), 2 large tomatoes (1 cup finely chopped tomatoes) and make the crushed ginger+garlic+green chili paste. When the pressure settles down on its own in the cooker, open the lid. Check if the rajma is cooked or not by eating or pressing a bean with your fingers. The cooked beans should not have a bite to them and softened. The Punjabi rajma masala has to thicken and the curry has to be of the right consistency, which is neither too thick nor thin.",
      ingredients: [
        { ingredient: "oil", is_checked: true },
        { ingredient: "250 gms Rajma beans", is_checked: true },
        { ingredient: "onions", is_checked: true },
        { ingredient: "Rajma Masala", is_checked: true },
        { ingredient: "2tbsp Cumin seeds", is_checked: true },
        { ingredient: "3 clove Garlic", is_checked: true },
        { ingredient: "2 clove Ginger", is_checked: true },
        { ingredient: "2 tblsp Tumeric powder", is_checked: true },
        { ingredient: "1 tblsp Corriander powder", is_checked: true },
      ],
    },
    {
      id: 384825986246,
      recipe: "Mutton Korma",
      description:
        "Mutton Korma is a delectable mutton preparation, which can be prepared at home using some easily available ingredients in your kitchen. Here’s how you can prepare this delectable delicacy. Wash and drain the mutton pieces under cold running water. Now add mutton pieces to a deep pan with 1/2 to 1 cup of water and a little salt. Bring to a boil and reduce the flame. Now, blend the soaked poppy seeds to a paste. Simmer until the meat is 60% cooked and once it is done, turn off the flame. Take a pan and dry roast all the ingredients for a few minutes. Transfer the roasted masalas to a mixer grinder and grind to a fine paste. Heat oil in a heavy-bottomed pan over medium flame. Add the ground masala paste and stir-fry with a little water. Add the cooked mutton pieces in the pan and stir-fry until well coated. Add salt and mix well. Now add the curd and water along with poppy seeds paste and stir well. Reduce flame and cover the pan with a lid. If you want to make it spicier, add some black pepper powder this will accentuate the taste and will add a nice dark tint to the dish. Allow the dish to simmer for 30 to 45 minutes or until the meat is tender. Turn off the heat and transfer the mutton recipe to a serving dish. Garnish the mutton korma recipe with ginger, coriander leaves and lime juice. Serve hot with naan or rice.",
      ingredients: [
        { ingredient: "500 gm chopped mutton", is_checked: true },
        { ingredient: "1 pinch powdered salt", is_checked: true },
        { ingredient: "1/2 gm powdered turmeric", is_checked: true },
        { ingredient: "3 teaspoon lime juice", is_checked: true },
        { ingredient: "3 cloves garlic", is_checked: true },
        { ingredient: "1/2 teaspoon cumin seeds", is_checked: true },
        { ingredient: "3 clove", is_checked: true },
        { ingredient: "1/2 bay leaf", is_checked: true },
        { ingredient: "1 cup sunflower oil", is_checked: true },
        { ingredient: "1 chopped onion", is_checked: true },
        { ingredient: "4 green cardamom", is_checked: true },
        { ingredient: "salt", is_checked: true },
      ],
    },
  ];
//   console.log("rec_arr[id] is:  " + JSON.stringify(rec_arr[id]));
  new_data = Object.keys(rec_arr).map((k) => {
    return rec_arr[k];
  });
  localStorage.setItem("recipes", JSON.stringify(new_data));
var recipes = !!localStorage.getItem("recipes")
  ? $.parseJSON(localStorage.getItem("recipes"))
  : {};
console.log("recipes is: " + JSON.stringify(recipes));
var rec_arr = {};

function load_list($renew = false) {
  if ($renew)
    recipes = !!localStorage.getItem("recipes")
      ? $.parseJSON(localStorage.getItem("recipes"))
      : {};
  $("#recipe-list").html("");
  if (Object.keys(recipes).length > 0) {
    Object.keys(recipes).map((k) => {
      rec_arr[recipes[k].id] = recipes[k];
      var data = recipes[k];
      var ritem = $($("noscript#recipe-item-clone").html()).clone();
      ritem.attr("data-id", data.id);
      ritem.find(".recipe-title").text(data.recipe);
      ritem.find(".recipe-description").text(data.description);
      ing_count = Object.keys(data.ingredients).length;
      ing_checked = 0;
      Object.keys(data.ingredients).map((i) => {
        if (data.ingredients[i].is_checked) ing_checked++;
      });
      ritem
        .find(".ing-status")
        .text("Ingredient(s): " + ing_checked + " out of " + ing_count);
      ritem
        .find(".view-data, .edit-data, .delete-data")
        .attr("data-id", data.id);
      $("#recipe-list").append(ritem);
      ritem.find(".delete-data").click(function () {
        var conf = confirm("Are you sure to delete this Recipe?");
        var id = $(this).attr("data-id");
        if (conf == true) delete_recipe(id);
      });
      ritem.find(".edit-data").click(function () {
        var form = $("#recipe-form");
        $("#form-title").text("Update Recipe Details");
        form.find('[name="id"]').val(data.id);
        form.find('[name="name"]').val(data.recipe);
        form.find('[name="description"]').val(data.description);
        Object.keys(data.ingredients).map((i) => {
          var item = $($("noscript#ing-clone").html()).clone();
          var queue = i;
          item.attr("data-queue", queue);
          item
            .find('[name="ingredient[]"]')
            .attr("name", "ingredient[" + queue + "]")
            .val(data.ingredients[i].ingredient);
          item
            .find('[name="ingredient_checked[]"]')
            .attr("name", "ingredient_checked[" + queue + "]")
            .attr("id", "ingredient_" + queue);
          if (data.ingredients[i].is_checked)
            item
              .find('[name="ingredient_checked[' + queue + ']"]')
              .prop("checked", true);
          item.find(".ing-check").attr("for", "ingredient_" + queue);
          item.find(".ingredient-name").text(data.ingredients[i].ingredient);
          console.log(item[0]);
          $("#ingredient-list").append(item);
          item.find(".del-ingredient").click(function () {
            item.remove();
          });
        });
        $("#recipe-form-holder").show("slideDown");
        $("#recipe-list-holder").hide("slideDown");
      });
      ritem.find(".view-data").click(function () {
        var viewModal = $("#viewModal");
        var description = data.description.replace(/\n/gi, "<br/>");
        viewModal.find("#modal-recipe-name").text(data.recipe);
        viewModal.find("#modal-recipe-description").html(description);
        viewModal.find("#modal-ingredients").html("");
        Object.keys(data.ingredients).map((i) => {
          var li = $('<li class="list-group-item">');
          li.html(
            (data.ingredients[i].is_checked
              ? "<span class='me-2'><span class='fa fa-check text-primary'></span></span>"
              : "<span class='ms-4'></span>") + data.ingredients[i].ingredient
          );
          viewModal.find("#modal-ingredients").append(li);
        });
        viewModal.modal("show");
      });
    });
  }
  $("#search").trigger("input");
}

function delete_recipe($id) {
  start_loader();
  if (!!rec_arr[$id]) delete rec_arr[$id];
  var new_data = {};
  new_data = Object.keys(rec_arr).map((k) => {
    return rec_arr[k];
  });
  localStorage.setItem("recipes", JSON.stringify(new_data));
  load_list(true);
  end_loader();
}
$(function () {
  $("body").height($(window).height());
  load_list();
  end_loader();
  $("#add_recipe").click(function () {
    $("#recipe-form-holder").show("slideDown");
    $("#recipe-list-holder").hide("slideDown");
  });
  $("#cancel-form").click(function () {
    $("#recipe-form-holder").hide("slideUp");
    $("#recipe-list-holder").show("slideUp");
    $("#recipe-form")[0].reset();
    $("#ingredient-list").html("");
    $("#form-title").text("Add New Recipe");
    $('[name="id"]').val("");
  });

  $("#new_ingredient").click(function () {
    var ingredient = $("#ingredient-txtfield").val();
    if (ingredient == "") {
      $("#ingredient-txtfield").focus();
    } else {
      var item = $($("noscript#ing-clone").html()).clone();
      var queue =
        $("#ingredient-list .ingredient-item").length > 0
          ? parseInt(
              $("#ingredient-list .ingredient-item").last().attr("data-queue")
            ) + 1
          : 0;
      item.attr("data-queue", queue);
      item
        .find('[name="ingredient[]"]')
        .attr("name", "ingredient[" + queue + "]")
        .val(ingredient);
      item
        .find('[name="ingredient_checked[]"]')
        .attr("name", "ingredient_checked[" + queue + "]")
        .attr("id", "ingredient_" + queue);
      item.find(".ing-check").attr("for", "ingredient_" + queue);
      item.find(".ingredient-name").text(ingredient);
      console.log(item[0]);
      $("#ingredient-list").append(item);
      item.find(".del-ingredient").click(function () {
        item.remove();
      });
      $("#ingredient-txtfield").val("").focus();
    }
  });
  $("#recipe-form").submit(function (e) {
    e.preventDefault();
    start_loader();
    var id = $('[name="id"]').val();
    if (id == "") {
      while (true) {
        id = Math.floor(Math.random() * 999999999999);
        console.log(id);
        if (!rec_arr[id]) break;
      }
    }
    var new_data = {};
    var ings = [];
    $("#ingredient-list .ingredient-item").each(function () {
      ings.push({
        ingredient: $(this).find(".ingredient-name").val(),
        is_checked: $(this).find(".ingredient-check").is(":checked"),
      });
    });
    rec_arr[id] = {
      id: id,
      recipe: $('[name="name"]').val(),
      description: $('[name="description"]').val(),
      ingredients: ings,
    };
    console.log("rec_arr[id] is:  " + JSON.stringify(rec_arr[id]));
    new_data = Object.keys(rec_arr).map((k) => {
      return rec_arr[k];
    });
    localStorage.setItem("recipes", JSON.stringify(new_data));
    end_loader();
    alert("Recipe Successfully Saved.");
    $(this)[0].reset();
    load_list(true);
    $("#cancel-form").trigger("click");
  });
  $("#search").on("input", function () {
    var find = $(this).val().toLowerCase();
    console.log(find);
    $("#recipe-list .list-group-item").each(function () {
      var txt = $(this).text().toLowerCase();
      if (txt.includes(find) == true) {
        $(this).toggle(true);
      } else {
        $(this).toggle(false);
      }
    });
  });
});
