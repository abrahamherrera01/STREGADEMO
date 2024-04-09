export interface GraphicSeries {
    type: string;
    label: {
      show: boolean;
      position: string;
      formatter: (params: any) => string;
    };
}
  
export interface GraphicData {
    title: string;
    width: string;
    height: string;
    text_color: string;
    graphic: {
      source: any[][];
      series: GraphicSeries[];
    };
}
  