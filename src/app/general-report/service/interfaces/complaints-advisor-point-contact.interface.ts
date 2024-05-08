export interface GetComplaintsAdvisorPointContact {
    code:   number;
    status: string;
    data:   Data;
}

export interface Data {
    countAsesorAreas: CountAsesorArea[];
    executives:       Executive[];
    $areasResult:     string[];
    seriesFormat:     SeriesFormat[];
}

export interface CountAsesorArea {
    asesor:      Executive;
    area:        string;
    total_count: string;
}

export enum Executive {
    AdriaSalinasFeria = "ADRIA SALINAS FERIA",
    AsencionTecpoyotlTochihuitl = "ASENCION TECPOYOTL TOCHIHUITL",
    CinthyaCarreonSanchez = "CINTHYA CARREON SANCHEZ",
    CristianJuarezFuentes = "CRISTIAN JUAREZ FUENTES",
    LuisCarlosDeLaLuz = "LUIS CARLOS DE LA LUZ",
    MineliaLizethNajeraChi = "MINELIA LIZETH NAJERA CHI",
    SandraMaritzaAlonsoBecerra = "SANDRA MARITZA ALONSO BECERRA",
    The00SistemasGmi = "00 SISTEMAS - GMI",
}

export interface SeriesFormat {
    name: string;
    data: string[];
}
