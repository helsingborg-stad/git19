//
//  ContentView.swift
//  WebPagesSwiftUI
//
//  Created by Ehsan Zilaei on 2020-01-09.
//  Copyright © 2020 Ehsan Zilaei. All rights reserved.
//

import SwiftUI
import WebKit

struct ContentView: View {
    var body: some View {
        NavigationView {
             VStack {
                WebView(request: URLRequest(url: URL(string: "https://app-mitt-hbg.herokuapp.com/")!))
             }
             .navigationBarTitle(Text( "Mitt Helsingborg" )) 
             .navigationBarHidden(true)
        }
    }
}

struct WebView: UIViewRepresentable {
    let request: URLRequest
    
    func makeUIView(context: Context) -> WKWebView {
        return WKWebView()
    }
    
    func updateUIView(_ uiView: WKWebView, context: Context) {
        uiView.load(request)
    }
}


struct ContentView_Previews: PreviewProvider {
    static var previews: some View {
        ContentView()
    }
}
