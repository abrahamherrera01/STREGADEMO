export interface StackedHorizontalBarData {    
    title: string;
    width: string;
    height:string;
    text_color:string;
    graphic: Graphic;    
}
export interface Graphic {        
    categories: string[]; // ejemplo ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun']
    series: Serie[];    
}

export interface Serie {
    name: string;
    type: string;
    stack: string; // 'total'
    label: any;
    emphasis: {
      focus: string; // 'series'
    };
    data: number[];
    itemStyle?: any;
}

  