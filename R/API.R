library("plotly")
library("plumber")
setwd("D:\\NTUT\\大三上\\資料庫管理\\project\\finacial_app\\R")

#* @get /main_income
#* @serializer png
main_income <- function(){
  
 data <- data.frame(name = c("大衛", "大帥", "大王"), percent = c(0.4, 0.3, 0.2))
  # 
  #
  # fig <- plot_ly(data, labels = ~name, values = ~percent, type = "pie", 
  #                textinfo = "label+percent", insidetextorientation = "radial") 
  # fig <- fig %>% layout(title = "收入主要來源商品", 
  #                       xaxis = list(showgrid = FALSE, zeroline = FALSE, showticklabels = FALSE), 
  #                       yaxis = list(showgrid = FALSE, zeroline = FALSE, showticklabels = FALSE))
  
  fig <- ggplot(data, aes(x = "", y = percent, fill = name)) +
    geom_bar(stat = "identity", width=1, color = "white")+
    coord_polar("y", start = 0) +
    theme_void()
    
 
  return(print(fig))
}


#pr <- plumber::plumb("API.R")
#pr$run(port = "3812")
