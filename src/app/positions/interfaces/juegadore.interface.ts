export interface ResrCountriesRespomse {
    results: Result[];
}

export interface Result {
    entity: Entity;
    score:  number;
    type:   string;
}

export interface Entity {
    category:                    null;
    country:                     Country;
    disabled:                    null;
    displayInverseHomeAwayTeams: null;
    firstName:                   null | string;
    gender:                      null;
    id:                          number;
    lastName:                    null | string;
    name:                        string;
    nameCode:                    null;
    national:                    null;
    position:                    string;
    ranking:                     null;
    shortName:                   string;
    slug:                        string;
    sport:                       null;
    team:                        Team;
    teamColors:                  null;
    type:                        null;
    userCount:                   number;
}

export interface Country {
    alpha2: null | string;
    name:   null | string;
}

export interface Team {
    country:    Country;
    disabled:   boolean | null;
    gender:     null | string;
    id:         number;
    name:       string;
    nameCode:   string;
    national:   boolean;
    ranking:    null;
    shortName:  string;
    slug:       string;
    sport:      Sport;
    teamColors: TeamColors;
    type:       number;
    userCount:  number;
}

export interface Sport {
    id:   number;
    name: string;
    slug: string;
}

export interface TeamColors {
    primary:   string;
    secondary: string;
    text:      string;
}
