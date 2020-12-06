function coffee()
    {
    console.log("В кав'ярні Владислав, Назарій, Юлія, Михайло, Денис, Олександр, Роман, В'ячеслав")
    var names = Array("Владислав", "Назарій", "Юлія", "Михайло", "Денис", "Олександр", "Роман", "В'ячеслав");
    var name = names[Math.floor(Math.random()*names.length)];
    console.log("За каву платитиме:");
    return name
    }
